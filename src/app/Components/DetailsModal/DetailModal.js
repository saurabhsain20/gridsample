import React, { Component } from "react";

class DetailModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
    };
  }

  onHandleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onHandleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="detail-container">
          <input
            type="text"
            value={this.state.name}
            className="name-container"
            placeholder="enter your name"
            onChange={this.onHandleNameChange}
          />
          <input
            type="number"
            value={this.state.number}
            onChange={this.onHandleNumberChange}
            className="number-container"
            placeholder="enter your phone number"
          />
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default DetailModal;
