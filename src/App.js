import Card from "./components/Card/Card";
import mayfly from "./components/Card/images/mayfly.jfif";
import sail from "./components/Card/images/sail.jfif";
import bone from "./components/Card/images/bone.jfif";
import wave from "./components/Card/images/wave.jfif";
import king from "./components/Card/images/king.jfif";
import React from "react";
import "./components/components.css";
// above we import a card component that will be used to build/display our cards.
// we also import different images to be used as card "values" that need to be matched.

// this array holds our card component's props. the key, id and image-value will be determined by these props.
const gridItems = [
  { id: "mayfly", img: mayfly, key: "mayfly1" },
  { id: "sail", img: sail, key: "sail1" },
  { id: "bone", img: bone, key: "bone1" },
  { id: "mayfly", img: mayfly, key: "mayfly2" },
  { id: "wave", img: wave, key: "wave1" },
  { id: "king", img: king, key: "king1" },
  { id: "sail", img: sail, key: "sail2" },
  { id: "bone", img: bone, key: "bone2" },
  { id: "wave", img: wave, key: "wave2" },
  { id: "king", img: king, key: "king2" },
];

// below we create a class component. within it will be multiple state values, functions and layouts for our game.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.gridItems = this.shuffle(gridItems);

    // state
    this.state = {
      selectedCard: null,
      chances: 6,
      won: 0,
      gameTime: new Date().getTime(),
      initialChances: 6,
    };
    // binding functions with "this" keyword to access and use state within these functions.
    this.clicked = this.clicked.bind(this);
    this.shuffledCard = this.shuffledCard.bind(this);
    this.calcChance = this.calcChance.bind(this);
    this.restart = this.restart.bind(this);
    this.easy = this.easy.bind(this);
    this.medium = this.medium.bind(this);
    this.hard = this.hard.bind(this);
  }

  // this function shuffles our cards/array props by mapping through the array, using the math.random function
  // to "shuffle" the array items, sorts the items and maps though their values for future shuffle.
  shuffle = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  // \this function maps through and array and uses it's items' props to build a card.
  shuffledCard(props) {
    return props.items.map((item) => (
      <Card
        text={item.text}
        id={item.id}
        img={item.img}
        key={props.cardKey + item.key}
        onSelected={this.clicked}
      />
    ));
  }

  // this function keeps track of which card is selected first and matches it's id to the next
  // clicked card's id to see if the cards match or not. the first clicked card on game-start
  // is set as state.id then the next clicked card is matched to see if it's id is the same as the
  // first card's id. if it is the user wins the game and the "won" counter is updated per win. if
  // the user did not click on the matching card the "chance" indicator is updated. when the chance
  // indicator reaches a value of 0 the user loses the game.
  clicked(id) {
    if (this.state.selectedCard === null) {
      this.setState({
        selectedCard: id,
      });
    }
    // matching card id's and setting "won" value on game-win
    else {
      if (id === this.state.selectedCard) {
        const restart = this.restart;
        setTimeout(function () {
          alert("You Win !");
          restart();
        }, 600);
        // this is actually an inline "function" within the "click" function. it is synced with the
        // id matcher to update the "won" indicator.
        const updateWon = this.state.won + 1;
        this.setState({
          won: updateWon,
        });
      }
      // updating chance indicator
      else {
        const updateChances = this.state.chances - 1;
        this.setState({
          chances: updateChances,
        });
      }
    }
  }

  // this function restarts the game when the user loses/ chance indicator value is 0.
  // this function is in sync with the "clicked" function.
  calcChance() {
    let chances = this.state.chances;
    if (this.state.chances === 0) {
      const restart = this.restart;
      setTimeout(function () {
        alert("You have lost the game");
        restart();
      }, 400);

      return <h3>Chances : {chances}</h3>;
    } else {
      return <h3>Chances : {chances}</h3>;
    }
  }

  // this function allows the user to start a current game over. it updates the state value of our
  // time keeper "gameTime", sets the starting card value in state "selectedCard" to "null" and chances
  // to original selected value "initialChances". this triggers a re-render.
  restart() {
    this.gridItems = this.shuffle(gridItems);
    this.setState({
      gameTime: new Date().getTime(),
      selectedCard: null,
      chances: this.state.initialChances,
    });
  }

  // the below three functions sets the game's difficulty by giving the user less chance of winning.
  easy() {
    this.setState({
      chances: 6,
      initialChances: 5,
    });
  }
  medium() {
    this.setState({
      chances: 4,
      initialChances: 4,
    });
  }
  hard() {
    this.setState({
      chances: 3,
      initialChances: 3,
    });
  }

  // below we build our html.
  render() {
    return (
      <div className="winBody">
        <div className="content">
          <div className="rowDifGrid">
            <h3>Difficulty : </h3>
            <div className="difGrid">
              <button className="diffButton" onClick={this.easy}>
                Easy
              </button>
              <button className="diffButton" onClick={this.medium}>
                medium
              </button>
              <button className="diffButton" onClick={this.hard}>
                Hard
              </button>
            </div>
          </div>
          <div className="resultDiv">
            {/* calling the chance indicator */}
            <div>
              <this.calcChance />
            </div>
            {/* this displays the won count by using JSX */}
            <h3>Won : {this.state.won}</h3>
          </div>

          <div>
            <button className="restart" onClick={this.restart}>
              Restart
            </button>
          </div>
        </div>

        <div className="fieldStyle">
          <div className="fieldHead">
            <div className="fieldBody">
              <this.shuffledCard
                items={this.gridItems}
                cardKey={this.state.gameTime}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
