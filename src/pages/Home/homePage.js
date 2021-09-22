import React from "react";
import Header from "../../Components/Header/Header";
import {Clock} from "../../Components/Header/CurrentTime";
import MainContent from "../../Components/MainContent/MainContent";
import TableData from "../../Components/MainContent/TableData";

const HomePage = () => {
    return(
        <div className='home-page'>
            <Header/>
            <Clock/>
            <MainContent/>
            <TableData/>
        </div>
    )
}

export default HomePage;