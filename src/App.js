import React, { Component } from "react";
import cards from "./cards.json";
import Nav from "./components/Nav";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Card from "./components/Card/Cards";

class App extends Component {
  state = {
    cards,
    clicked: [0],
    headingMsg: "Click a card to begin the game!",
    currentScore: 0,
    topscore: 0
  };

  correct = () => {
    const newScore = this.state.clicked.length;
    this.setState({
      currentScore: newScore
    });
    if (this.state.currentScore === 11) {
      this.setState({
        headingMsg: "You win!"
      });
    }
    if (this.state.currentScore >= this.state.topscore) {
      this.setState({
        topscore: newScore
      });
    }
  };

  incorrect = () => {
    this.setState({
      currentScore: 0,
      clicked: [0],
      headingMsg: "You suck, loser!"
    });
  };

  cardClick = id => {
    console.log("click " + id);
    this.setState({ clicked: this.state.clicked.concat(id) });
    console.log(this.state.clicked);
    if (this.state.clicked.indexOf(id) === -1) {
      this.correct();
      this.shuffle(cards);
    } else {
      this.incorrect();
    }
  };

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  render() {
    return (
      <div>
        <Nav
          headingMessage={this.state.headingMsg}
          currentScore={this.state.currentScore}
          topScore={this.state.topscore}
        />
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              cardClick={this.cardClick}
              name={card.name}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
