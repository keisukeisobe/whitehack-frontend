import React, { Component, ComponentType, useState, useEffect } from "react";

function Charform() {
  const [currentstep, setCurrentStep] = useState(2);
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

  //page change
  // nextPage() {
  //   setCurrentStep += 1;
  // };

  function previousButton() {
    if (currentstep !== 1) {
      return (
        <button className="btn btn-outline-secondary" type="button">
          Back
        </button>
      );
    }
    return null;
  }

  function nextButton() {
    if (currentstep < 3) {
      return (
        <button className="btn btn-outline-secondary" type="button">
          Next
        </button>
      );
    }
    return null;
  }

  return (
    <div className="container">
      <div className="card border-primary mb-3">
        <div className="card-header">Character Generation</div>
        <div className="chargenform">
          <form onSubmit={handleSubmit}>
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
            <br />
            <br />
            <div className="row">
              {previousButton()}
              <br />
              {nextButton()}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Charform;
