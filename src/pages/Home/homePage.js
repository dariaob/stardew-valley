import React from "react";
import Header from "../../Components/Header/Header";
import { FarmerTime } from "../../Components/Header/CurrentTime";
import Requirement from "../../Components/MainContent/ContentElements";
import Form from "../../Components/Comments/Form";
import {MainContent} from "../../Components/MainContent/MainContent";
import Pics from "../../Components/Pics/ImageElements";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <FarmerTime />
      <MainContent />
      <Requirement />
      <Pics/>
      <Form />
    </div>
  );
};

export default HomePage;
