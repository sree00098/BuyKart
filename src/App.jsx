import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Categories from "./Components/Categories/Categories";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Loginpage/Login";
import UserReg from "./Components/Loginpage/UserReg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Categories />
            <Banner />
            <Card />
            <Footer />
          </>
        }
      />
       
      <Route path="/log" element={<Login />} />
      <Route path="/register" element={<UserReg />} />
    </Routes>
  </Router>
  );
};

export default App;
