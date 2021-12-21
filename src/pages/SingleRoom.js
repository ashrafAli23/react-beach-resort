import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { RoomContext } from "../context";
import defaultBCG from "../images/room-1.jpeg";
import { StyledHero } from "../components/styledComp";

function SingleRoom(props) {
  const [state, setstate] = useState({
    slug: props.match.params.slug,
    defaultBCG,
  });

  let { getRoom } = useContext(RoomContext);
  const room = getRoom(state.slug);
  const {
    name,
    size,
    capacity,
    description,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [MainImg, ...defaultimg] = images;

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to room
        </Link>
      </div>
    );
  }

  return (
    <>
      <StyledHero img={MainImg || defaultBCG}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultimg.map((img, index) => {
            return <img key={index} src={img} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breackfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}

export default SingleRoom;
