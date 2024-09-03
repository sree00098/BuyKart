import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Categories from "./Components/Categories/Categories";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Loginpage/Login";
import UserReg from "./Components/Loginpage/UserReg";

const App = () => {
  return (
    <>
      <div>
      
        <Header />
        <Categories />
        <Banner />
        <Card/>
       <Footer/>
       <Login/>
       <UserReg/>
      </div>
    </>
  );
};

export default App;
