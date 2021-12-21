import React, { useContext } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "../context";
import Loading from "./Loading";

function RoomContainer() {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;
