import React from "react";
import classes from "./gridlayout.module.css";
const ExploreGrid = () => {
  return (
    <div className={classes.gridlayout}>
      <div className={`bg-red-300 ${classes.one}`}>1</div>
      <div className="bg-red-400">2</div>
      <div className="bg-red-500">3</div>
      <div className="bg-red-600 ">4</div>
      <div className="bg-red-700">5</div>
      <div className="bg-red-800">6</div>
      <div className="bg-red-900">7</div>
      <div className="bg-orange-300 ">8</div>
      <div className="bg-orange-500">9</div>
    </div>
  );
};

export default ExploreGrid;
