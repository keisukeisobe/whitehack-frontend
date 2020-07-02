import React, { Component, ComponentType, useState, useEffect } from "react";

function Charform() {
  const [currentstep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [charclass, setClass] = useState("Deft");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name: ${name}`);
    alert(`Class: ${charclass}`);
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const classChange = (event) => {
    setClass(event.target.value);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <br />
        <h1>Welcome!</h1>
        <br />
        <p>Enter your name:</p>
        <input type="text" value={name} onChange={nameChange} />
        <br />
        <br />
        <p>What is your character's class?</p>
        <select id="dropdown" onChange={classChange} value={charclass}>
          <option name="Deft">Deft</option>
          <option name="Strong">Strong</option>
          <option name="Wise">Wise</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Charform;
