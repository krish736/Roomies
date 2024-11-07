import React from "react";
import Cards from "../components/Cards";
import {rooms} from "../data/roomsData.js";

export default function Rooms() {
  return (
    <div className="mb-10">
      <h1 className="border-b-2 mx-10 mt-20 text-3xl">Location - Indore</h1>
      <div className="grid lg:grid-cols-3 gap-5 mx-10 mt-10">
        {rooms.map((room, index) => (
          <Cards
            key={index}
            image={room.img}
            rating={room.rating}
            title={room.title}
            description={room.description}
            address={room.address}
          />
        ))}
      </div>

      <h1 className="border-b-2 mx-10 mt-20 text-3xl">Location - MHOW</h1>
      <div className="grid lg:grid-cols-3 gap-5 mx-10 mt-10">
        {rooms.map((room, index) => (
          <Cards
            key={index}
            image={room.img}
            rating={room.rating}
            title={room.title}
            description={room.description}
            address={room.address}
          />
        ))}
      </div>
    </div>
  );
}
