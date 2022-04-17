import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import DropDown from "./DropDown";
import Help from "./help";

// this class component holds our different "functionalities" (win/Currency Convertor)
class Home extends Component {
  render() {
    return (
      // the BrowserRouter instance allows us to travel between components on one page.
      // what gets displayed is determined by which url is currently active for example : Home = "/"  and  Win = "/win" .
      <div>
        <BrowserRouter>
          <DropDown />
          <Routes>
            <Route exact={true} path="/" element={<App />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
