import React, { Component, ComponentType, useState, useEffect } from "react";

function About() {
  fetch("http://localhost:8000/api/equipment")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default About;
