import React, { Component } from "react";

class Unicorn extends Component {
  render() {
    return (
      <div className="allItems">
        <div className="unicorn-container">
          <div className="torso" />
          <div className="head" />
          <div className="belly" />
          <div className="nose" />
          <div className="ear">
            <div className="innerear" />
          </div>
          <div className="eye">
            <div className="blink-overlay" />
          </div>
          <div className="horn" />
          <div className="mane">
            <div className="manetop" />
            <div className="manemiddle" />
            <div className="manebottom" />
          </div>
          <div className="tail">
            <div className="tail-top" />
            <div className="tail-middle" />
            <div className="tail-end" />
          </div>
          <div className="leg backleg-behind" />
          <div className="leg backleg-front" />
          <div className="leg frontleg-behind" />
          <div className="leg frontleg-front" />
        </div>

        <div className="rainbow-background">
          <ul className="rainbow-lines">
            <li className="line red red1" />
            <li className="line orange orange1" />
            <li className="line yellow yellow1" />
            <li className="line green green1" />
            <li className="line blue blue1" />
            <li className="line purple purple1" />
            <li className="line red red2" />
            <li className="line orange orange2" />
            <li className="line yellow yellow2" />
            <li className="line green green2" />
            <li className="line blue blue2" />
            <li className="line purple purple2" />
            <li className="line red red3" />
            <li className="line orange orange3" />
            <li className="line yellow yellow3" />
            <li className="line green green3" />
            <li className="line blue blue3" />
            <li className="line purple purple3" />
            <li className="line red red4" />
            <li className="line orange orange4" />
            <li className="line yellow yellow4" />
            <li className="line green green4" />
            <li className="line blue blue4" />
            <li className="line purple purple4" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Unicorn;