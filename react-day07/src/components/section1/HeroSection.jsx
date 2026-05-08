import React from "react";
import HeroSecLeftSide from "./HeroSecLeftSide";
import HeroSecRightSide from "./HeroSecRightSide";

function HeroSection(props){
    return(
        <div className="heroSec flex flex-wrap   justify-between">
            <HeroSecLeftSide/>
            <HeroSecRightSide userCard={props.userCard} />
        </div>
    )
}

export default HeroSection;