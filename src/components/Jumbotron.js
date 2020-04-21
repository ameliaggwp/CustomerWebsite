import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Abby P</h1>
        <p className="lead">
          This might talk about the new tutoring stuff Abby wants to do.
        </p>
        <hr className="my-4" />
        <p>
          This is some more text to talk about the services and languages you
          might expect to be tutored in.
        </p>
        <a className="btn btn-secondary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
