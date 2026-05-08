import React from 'react'
import HeroSecCardContent from './HeroSecCardContent'

function HeroSecCards(props) {  
  return (
      props.userCard.map(function(elem,key){
        return(
          <div className=' w-4/12 h-full p-3 relative'>
          <HeroSecCardContent cardId={key}  userCard = {elem} key={key} />
      </div>
        )
      })
  )
}

export default HeroSecCards