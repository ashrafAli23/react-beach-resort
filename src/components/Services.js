import React, { useState } from "react";

import Title from "./Title";

function Services() {
  let [states] = useState({
    services: [
      {
        icon: <i className="fas fa-cocktail"></i>,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque.",
      },
      {
        icon: <i className="fas fa-hiking"></i>,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque.",
      },
      {
        icon: <i className="fas fa-shuttle-van"></i>,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque.",
      },
      {
        icon: <i className="fa fa-beer" aria-hidden="true"></i>,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque.",
      },
    ],
  });

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {states.services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
