import React from "react";
import "./Wrapper.css";

// Component for the actual play area

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
