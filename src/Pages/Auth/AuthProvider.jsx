import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const CreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const AuthInfo = {
    CreateUser,
  };

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
