import React from "react";

function Row(props) {
  // Creating our classes to match bootstrap -- Making it responsive
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;