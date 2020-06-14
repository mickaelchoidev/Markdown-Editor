import React from "react";
import { useSpring, animated, config } from "react-spring";

import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
  const props = useSpring({
    config: { duration: 2000 },
    from: {
      opacity: 0,
      color: "#f2f0e8",
    },
    to: {
      opacity: 1,
      color: "#427584",
    },
    delay: 100,
  });

  return (
    <IconContext.Provider value={{ color: "#2a2a28", size: "30px" }}>
      <animated.div className="text-center" style={props}>
        <a
          href="https://linkedin.com/in/mickaelchoi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating p-1 mx-1 mx-md-5"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/mickaelchoidev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating p-1 mx-1 mx-md-5"
        >
          <FaGithubSquare />
        </a>

        <a
          href="mailto:mickaelchoidev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-floating p-1 mx-1 mx-md-5"
        >
          <FaGooglePlusSquare />
        </a>
      </animated.div>
    </IconContext.Provider>
  );
};

export default Footer;
