import React from 'react'

function HeroSecCardContent(props) {
  return (
    <div className={` bg-cover relative bg-center h-full flex justify-between flex-col rounded-3xl  p-8 before:bg-black before:opacity-30 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-0 before:rounded-3xl`} style={{backgroundImage:`url(${props.userCard.cardImag})`}}>
    <div className='relative z-1'>
             <p className='bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl font-semibold'>
                 {props.cardId+1}
             </p>
         </div>
         <div className='relative z-1'>
             <p className='text-white mb-8'>
                 {props.userCard.intro}
             </p>

                <button style={{background:props.userCard.buttonTagColor}} className={`px-4 py-2 rounded-full cursor-pointer text-white`}>{props.userCard.buttonTag}  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right inline-block"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button>

         </div>
    </div>
  )
}

export default HeroSecCardContent;