import React from 'react'
import HeroSecCards from './HeroSecCards'

function HeroSecRightSide(props) { 
  return (
    <div className="  w-full flex flex-wrap justify-between lg:w-8/12 p-3 ">
       <HeroSecCards userCard = {props.userCard}/>
    </div>
  )
}

export default HeroSecRightSide