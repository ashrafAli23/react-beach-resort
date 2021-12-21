import React from "react";

function Hero({ hero, children }) {
  return <header className={hero}>{children}</header>;
}

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero",
};
