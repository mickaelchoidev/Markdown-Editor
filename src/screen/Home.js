import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="jumbotron p-3 p-sm-5 mt-5 ">
        <h2 className="display-4">Hello world, Welcome !</h2>
        <p className="lead">
          This is a Markdown Editor... Just a simple and clear app !
        </p>
        <hr className="my-2" />
        <p className="lead">
          It uses React with functional components and Bootstrap 4. <br />
          Just click on the button and enjoy !
        </p>
        <div className="text-center">
          <Link className="btn btn-dark btn-lg mt-3 mb-3 mb-sm-2" to="/editor">
            I want to try it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
