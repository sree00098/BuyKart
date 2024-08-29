import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Categories from "./Components/Categories/Categories";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Categories />
        <Banner />
      </div>
    </>
  );
};

export default App;
