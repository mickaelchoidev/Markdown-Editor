import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

import "../App.css";

const Navbar = () => {
  const props = useSpring({
    config: { duration: 2000 },
    from: {
      opacity: 0,
      color: "#427584",
    },
    to: {
      opacity: 1,
      color: "#f2f0e8",
    },
    delay: 100,
  });

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-transparent m-0 py-0 px-0 px-sm-4">
        <Link to="/">
          <animated.h1 style={props} id="logo">
            Markdown Editor #
          </animated.h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
