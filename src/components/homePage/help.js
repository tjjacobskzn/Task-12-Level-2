import React from "react";
import "../components.css";

// this is an instruction menu for "match the hatch"
function Help() {
  return (
    <div className="helpBody">
      <h1>Match the Hatch</h1>

      <h2>Instructions and Rules</h2>
      <br></br>

      <h3>How the game works</h3>
      <p>
        Match the Hatch consists out of numerous tiles/cards that are masked.
        The user needs to click on any card to begin the game. Once the user has
        clicked on a <i>card</i> it will "flip" over and reveal it's{" "}
        <i>image.</i> The user then needs to click on another <i>card</i> that{" "}
        <i>matches</i> the first clicked card's image to win. Depending on what
        difficulty is selected the user has a <i>limited amount</i> of
        chances/clicks to fin the matching card. The user has the choice to
        restart the game by clicking on the "reset" button.
      </p>
      <br></br>

      <h3>Compliments</h3>
      <p>
        The user can navigate through the UI by clicking on the dropDown menu
        and selecting what they want to see.
      </p>
    </div>
  );
}

export default Help;
