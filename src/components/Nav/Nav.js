import React from "react";
import "./Nav.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="heading">
        <h3 style={titleStyle}>Futurama Memory Game</h3>
        <p>
          {props.headingMessage} | Score: {props.currentScore} | Top Score: {props.topScore}{" "}
        </p>
      </div>
    </nav>
  );
}

const titleStyle = {
  marginTop: "0px",
  paddingTop: "5px"
};

export default Nav;
