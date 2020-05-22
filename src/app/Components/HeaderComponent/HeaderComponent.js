import React, { Component } from "react";
import "./HeaderComponent.css";

class HeaderComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h2 className="first-text">BEST NEET COACHING IN INDIA</h2>
          <p className="second-text">
            Check Experts review of the best NEET Coaching Classes
          </p>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
