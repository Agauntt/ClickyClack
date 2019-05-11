import React from "react";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="heading" style={headingStyle}>
        <h3>Clicky Clack!</h3>
        <p>
          {props.headingMessage} | Score: {props.currentScore} | Top Score: {props.topScore}{" "}
        </p>
      </div>
    </nav>
  );
}

const headingStyle = {
  textAlign: "center",
  background: "lightGrey"
};

export default Nav;
