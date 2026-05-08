import React from "react";

function Header(){
    return(
        <header className="flex flex-wrap justify-between items-center  py-5">
            <div className="left-side">
                <p className="bg-black rounded-full text-white px-5 py-1 uppercase text-[8px] md:text-[16px]">Target Audience</p>
            </div>
            <div className="right-side">
                    <p className="uppercase text-[8px] md:text-[16px] bg-gray-100 rounded-full px-5 py-1 tracking-wide">Digital Banking Platform</p>
            </div>
        </header>
    )
}

export default Header;