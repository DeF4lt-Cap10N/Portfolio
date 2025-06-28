import React from "react";
import Home from "./components/Home";
import Bg from "./components/Bg";
import Scroller from "./components/Scroller";

const App = () => {
  return (
    <>
      <Bg />
      <div className="">
        <Scroller/>
        <Home />
      </div>
    </>
  );
};

export default App;
