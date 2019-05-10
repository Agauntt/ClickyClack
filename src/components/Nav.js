import React from "react"

// Component for the Navbar

function Nav(props) {
    return (
      <nav className="navbar">
        <ul>
          <li className="navname">
            <h5>Clicky Clack!</h5>
          </li>
          <li>
          {props.headingMessage} | Score: {props.currentScore} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;