import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    // state by default = "hidden". This sets the "back-side" of the card to ""hidden".
    this.state = {
      vis: "hidden",
      cardValue: "",
    };
    // binding the "this" keyword.
    this.flipCard = this.flipCard.bind(this);
  }

  // below function will be used to "flip" a card by setting the "back-side" of the card to "visible".
  flipCard() {
    this.setState({
      vis: "visible",
    });

    this.props.onSelected(this.props.id);
  }

  render() {
    // below we build our Card layout and call or make instances of our desired functions/methods and components/class components.
  // Note that we are building an html layout through use of Advanced JavaScript and JSX
    return (
      <div onClick={this.flipCard}>
        <div className="card">
          <div id={this.props.id} className="card-front"></div>
          <img
            className="card-back"
            style={{ visibility: this.state.vis }}
            alt="myImage"
            src={this.props.img}
          ></img>
        </div>
      </div>
    );
  }
}

export default Card;
