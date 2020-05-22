import React, { Component } from "react";
import "./CardComponent.css";
import logo from "../../../assets/images/logo.svg";
import DetailModal from "../DetailsModal/DetailModal";

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal: false,
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div className="institute-container">
        <div className="container-box">
          <div className="upper-part">
            <div className="left">
              <div className="logo-container">
                <img src={logo} />
              </div>
            </div>
            <div className="right">
              <div className="course-heading">
                <h3>{data.name}</h3>
              </div>
              <div className="city">
                <p>{data.city}</p>
              </div>
              <div className="rating">
                <p>
                  {data.currentRating} out of {data.totalRating}
                </p>
              </div>
            </div>
          </div>
          <div className="lower-part">
            <div className="price">
              <p>
                {data.startPrice} - {data.endPrice}
              </p>
            </div>
            <div className="details">
              {this.state.isModal && <DetailModal />}
              <button
                className="btn"
                onClick={() => this.setState({ isModal: true })}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardComponent;
