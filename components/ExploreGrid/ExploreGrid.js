import React from "react";
import classes from "./gridlayout.module.css";
import Container from '../Container/Container'
const ExploreGrid = () => {
  return (
    <Container>
      <section className=" min-h-screen mx-auto h-[100vh] flex flex-col justify-between space-y-5 z-10">

      <h1 className="text-5xl font-bold text-start tracking-wider px-[10rem] py-10 text-[#FF9900]">Explore Tilottama Campus</h1>
    <div className={`${classes.gridlayout} mx-auto flex flex-col  md:grid md:grid-cols-3`}>
      <div className={`bg-red-300 ${classes.item0}`}>0</div>
      <div className={`bg-red-300 ${classes.item1}`}>1</div>
      <div className={`bg-red-300 ${classes.item2}`}>2</div>
      <div className={`bg-red-300 ${classes.item3}`}>3</div>
      <div className={`bg-red-300 ${classes.item4}`}>4</div>
      <div className={`bg-red-300 ${classes.item5}`}>5</div>
      <div className={`bg-red-300 ${classes.item6}`}>6</div>
    </div>
      <div className="w-[100%] mx-auto bg-[#D9D9D9] text-[#201F54] font-bold uppercase tracking-wide py-3 text-center">Explore More</div>
      </section>

    </Container>
  );
};

export default ExploreGrid;
