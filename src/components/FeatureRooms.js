import React, { useContext } from "react";

import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

function FeatureRooms() {
  let { loading, featuredRooms: rooms } = useContext(RoomContext);

  rooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}

export default FeatureRooms;
