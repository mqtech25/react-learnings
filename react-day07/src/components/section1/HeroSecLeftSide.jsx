import React from "react";

function HeroSecLeftSide(){
    return(
        <div className="flex flex-col justify-between  w-full h-auto lg:h-[85vh] lg:w-4/12 p-3">
                <div>
                    <h1 className="text-5xl max-w-3 mt-5 mb-4 font-semibold leading-13">
                        Prospective Cutomer Segmentation
                    </h1>
                    <p className="text-gray-700 max-w-72">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eos quasi libero voluptate facilis quam assumenda ad ducimus quaerat. Nisi dolorum ab est recusandae fugiat aspernatur tempore minima eveniet aliquam.
                    </p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
    </div>
    )
}

export default HeroSecLeftSide;