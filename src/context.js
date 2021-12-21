import React, { useState, useEffect } from "react";

import items from "./data";

const RoomContext = React.createContext();

function RoomProvider(Props) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breackfast: false,
    pets: false,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(
      ...rooms.map((item) => {
        return item.price;
      })
    );

    let maxSize = Math.max(
      ...rooms.map((item) => {
        return item.size;
      })
    );
    setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice,
      minSize: 0,
      maxSize,
      breackfast: false,
      pets: false,
    });
  }, []);

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  const getRoom = (slug) => {
    let TempRoom = [...state.rooms];
    const room = TempRoom.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = async (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(name, value);

    setState({
      ...state,
      [name]: value,
      filterRooms,
    });
  };
  let filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    setState({
      sortedRooms: tempRooms,
    });
  };

  return (
    <RoomContext.Provider value={{ ...state, getRoom, handleChange }}>
      {Props.children}
    </RoomContext.Provider>
  );
}

export { RoomProvider, RoomContext };
