import React from "react";
import './CarLoader.css';

function CarLoader() {
  return (
    <div className="loader__container">
      <img className="loader__image" src="loading.gif" alt="Loading" />
      <h1>Loading...</h1>
    </div>
  );
}

export default CarLoader;
