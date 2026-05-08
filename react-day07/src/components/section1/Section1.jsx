import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

function Section1(props){ 
    return(
        <div className="h-screen w-full ">
            <div className="container  mx-auto">
                <Header/>
                <HeroSection userCard={props.userCardData}/>
            </div>
        </div>
    )
}

export default Section1;