import React from "react";
import { withRouter } from "react-router-dom";
import CardComp from "./card";

function HomePage() {
  return (
    <div>
      <h3>Homepage</h3>
      <div id="hmp-body">
        <div id="row">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
        <div id="row">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
        <div id="row">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
