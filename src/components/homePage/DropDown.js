import React from "react";
import { useNavigate } from "react-router-dom";

// this function is created as an external file to make the "useNavigate" function available in a react class component.
// useNavigate changes the URL according to which value it is given. In this case the command will be the value of the option elements.
function DropDown() {
  let navigate = useNavigate();

  // below function uses the "useNavigate" function to set the URL to the value of the selected option element.
  // It fires when the select element changes to whichever option element.
  function setValue(event) {
    navigate(event.target.value);
  }

  return (
    <div className="dropDown">
      <select onChange={setValue}>
        <option value={"/"}>Match the Hatch</option>
        <option value={"/Help"}>Help</option>
      </select>
    </div>
  );
}

export default DropDown;
