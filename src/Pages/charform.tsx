import React, { Component, ComponentType, useState, useEffect } from "react";

function Charform() {
  return (
    <div className="">
      <form>
        <br />
        <h1>Welcome!</h1>
        <br />
        <p>Enter your name:</p>
        <input type="text" />
        <br />
        <br />
        <p>What is your character's class?</p>
        <select id="dropdown">
          <option value="Deft">Deft</option>
          <option value="Strong">Strong</option>
          <option value="Wise">Wise</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Charform;
