import React, {Component} from 'react';
import logo from './logo.svg';
import cards from './cards.json';
import Nav from './components/Nav';
import './App.css';


class App extends Component {
    state = {
      cards,
      headingMsg: "Click a card to begin the game!",
      currentScore: 0,
      topscore: 0
    }

    render() {
      return(
        <div>
          <Nav 
          headingMsg = {this.state.headingMsg}
          currentScore = {this.state.currentScore}
          />

        </div>
      )
    }
}

export default App;
