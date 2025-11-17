import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const serviceCentersData = useLoaderData();
  // console.log(serviceCentersData);
  const position = [23.685, 90.3563];
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCentersData.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      // console.log(district, coord);
      mapRef.current.flyTo(coord, 13);
    }
  };
  return (
    <div className="mt-5 mb-20 px-20 py-5 bg-white rounded-3xl">
      <div>
        <h2 className="text-5xl font-extrabold text-secondary mb-5">
          We are available in 64 districts
        </h2>
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search"
            />
          </label>
          <button type="submit" className="bg-primary  btn">
            Search
          </button>
        </form>
        <div className="divider"></div>
        <div className="border h-[800px]">
          <h3 className="font-extrabold text-3xl text-secondary mb-5">
            We deliver almost all over Bangladesh
          </h3>
          <MapContainer
            className="h-[740px]"
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCentersData.map((serviceCenter) => (
              <Marker
                position={[serviceCenter.latitude, serviceCenter.longitude]}
              >
                <Popup>
                  {serviceCenter.district} <br />{" "}
                  {serviceCenter.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
