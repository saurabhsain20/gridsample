import React, { useState, useEffect } from "react";
import "./FilterComponent.css";

function FilterComponent(props) {
  const [stream, setStream] = useState("select");
  const [exam, setExam] = useState("select");
  const [state, setState] = useState("select");
  const [city, setCity] = useState("select");

  useEffect(() => {
    const filters = {
      stream,
      exam,
      state,
      city,
    };
    console.log(filters);
    props.setFilterData(filters);
  }, [stream, exam, state, city]);
  return (
    <div className="container">
      <div className="title">
        <h2>Filters</h2>
      </div>
      <div className="subfilter">
        <label className="text">Stream</label>
        <select
          className="dropdown"
          onChange={(e) => setStream(e.target.value)}
        >
          <option value={stream}>--Select--</option>
          <option value="Science">Science</option>
          <option value="Maths">Maths</option>
        </select>
      </div>
      <div className="subfilter">
        <label className="text">Exam</label>
        <select className="dropdown" onChange={(e) => setExam(e.target.value)}>
          <option value={exam}>--Select--</option>
          <option value="Neet">NEET</option>
          <option value="Iit">IIT</option>
        </select>
      </div>
      <div className="subfilter">
        <label className="text">State</label>
        <select className="dropdown" onChange={(e) => setState(e.target.value)}>
          <option value={state}>--Select--</option>
          <option value="delhi">Delhi</option>
          <option value="haryana">Haryana</option>
        </select>
      </div>
      <div className="subfilter">
        <label className="text">City</label>
        <select className="dropdown" onChange={(e) => setCity(e.target.value)}>
          <option value={city}>--Select--</option>
          <option value="delhi">Delhi</option>
          <option value="gurgaon">Gurgaon</option>
        </select>
      </div>
    </div>
  );
}

export default FilterComponent;
