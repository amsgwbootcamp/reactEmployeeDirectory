import React from "react";

function Container(props) {
  // Creating our classes to match bootstrap -- Making it responsive
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;