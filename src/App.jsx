import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Categories from "./Components/Categories/Categories";
import Card from "./Components/Card/Card";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Categories />
        <Banner />
        <Card/>
      </div>
    </>
  );
};

export default App;
