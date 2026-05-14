import React from 'react'
import deletIcon from '../assets/delete-bin-line.svg'

function TodoWorkCard(props) {
  return (
    <div className="todoWorkCard bg-white flex flex-col justify-between w-full min-h-[200px] lg:w-3/12 rounded m-3 transition delay-150 duration-300 ease-in-out  border-t-4  border-t-transparent hover:shadow-2xl hover:border-t-amber-400">
    <div className='todoWorkCard-detail '>
    <h2 className='todoWorkCard-title border-b-1  px-3 py-2'>{props.task}</h2>
    <p className='todoWorkCard-des text-gray-500 p-3'>{props.taskDetail}</p>
    </div>
    <div className='flex justify-end  mt-auto '>
      <span className='bg-red-400 p-1 rounded cursor-pointer' onClick={props.onClick}>
      <img src={deletIcon} className='w-6' alt="" />
      </span>
    </div>
    </div>
  )
}

export default TodoWorkCard