import React from "react";
import Header from "../../Components/Header/Header";
import {Clock} from "../../Components/Header/CurrentTime";
import MainContent from "../../Components/MainContent/MainContent";
import Requirement from "../../Components/MainContent/ContentElements";
import Pics from "../../Components/Pics/ImageElements";
import Comments from "../../Components/Comments/Comments";

const HomePage = () => {
    return(
        <div className='home-page'>
            <Header/>
            <Clock/>
            <MainContent/>
            <Requirement/>
            <Pics/>
            <Comments/>
        </div>

    )
}

export default HomePage;