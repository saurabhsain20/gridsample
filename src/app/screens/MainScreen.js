import React, { Component } from "react";
import "./MainScreen.css";
import CardComponent from "../Components/CardComponent/CardComponent";
import HeaderComponent from "../Components/HeaderComponent/HeaderComponent";
import FilterComponent from "../Components/FilterComponent/FilterComponent";

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyData: [],
    };

    this.data = [
      {
        image: "NA",
        name: "Aakash Institute",
        city: "Delhi",
        state: "Delhi",
        stream: "Science",
        exam: "Neet",
        currentRating: 3,
        totalRating: 5,
        startPrice: "5k",
        endPrice: "10K",
        courses: ["NEET", "AIIMS"],
      },
      {
        image: "NA",
        name: "Career Point",
        city: "Delhi",
        state: "Delhi",
        stream: "Maths",
        exam: "IIT",
        currentRating: 3,
        totalRating: 5,
        startPrice: "5k",
        endPrice: "10K",
        courses: ["NEET", "AIIMS"],
      },
      {
        image: "NA",
        name: "Resonance Institute",
        city: "Gurgaon",
        state: "Haryana",
        stream: "Science",
        exam: "Neet",
        currentRating: 3,
        totalRating: 5,
        startPrice: "5k",
        endPrice: "10K",
        courses: ["NEET", "AIIMS"],
      },
      {
        image: "NA",
        name: "Bansal Classes",
        city: "Gurgaon",
        state: "Delhi",
        stream: "Science",
        exam: "IIT",
        currentRating: 3,
        totalRating: 5,
        startPrice: "5k",
        endPrice: "10K",
        courses: ["NEET", "AIIMS"],
      },
      {
        image: "NA",
        name: "Matrix",
        city: "Delhi",
        state: "Delhi",
        stream: "Science",
        exam: "Neet",
        currentRating: 3,
        totalRating: 5,
        startPrice: "5k",
        endPrice: "10K",
        courses: ["NEET", "AIIMS"],
      },
    ];
  }

  componentDidMount() {
    this.setState({
      dummyData: this.data,
    });
  }

  getFilterData = (filterData) => {
    console.log("calling", filterData);
    const filterArr = this.data.filter(
      (item) =>
        item.city.toLowerCase() === filterData.city.toLowerCase() ||
        item.state.toLowerCase() === filterData.state.toLowerCase() ||
        item.stream.toLowerCase() === filterData.stream.toLowerCase() ||
        item.exam.toLowerCase() === filterData.exam.toLowerCase()
    );
    console.log("Data", filterArr);
    if (filterArr.length > 0) {
      this.setState({
        dummyData: filterArr,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="outer-container">
          <div className="header-container">
            <HeaderComponent />
            <div className="filter-container">
              <FilterComponent setFilterData={this.getFilterData} />
            </div>
            <div className="grid-container">
              {this.state.dummyData.map((item) => (
                <CardComponent data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreen;
