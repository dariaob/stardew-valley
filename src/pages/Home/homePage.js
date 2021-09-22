import React from "react";
import Header from "../../Components/Header/Header";
import {Clock} from "../../Components/Header/CurrentTime";
import MainContent from "../../Components/MainContent/MainContent";
import Requirement from "../../Components/MainContent/ContentElements";

const HomePage = () => {
    return(
        <div className='home-page'>
            <Header/>
            <Clock/>
            <MainContent/>
            <Requirement/>
        </div>
    )
}

export default HomePage;