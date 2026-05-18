import React from 'react'

function Card(props) {
  return (
    <a href={props.elem.url} target='_blank' className="gallery-card w-60 overflow-hidden rounded-2xl flex flex-wrap flex-col  justify-center hover:shadow " key={props.key}>
    <div className="overflow-hidden">
    <img src={props.elem.download_url} className='gallery-card-img transition-all delay-100 duration-300  w-60 h-60 hover:scale-[2] object-cover rounded-2xl' alt="" />
    </div>
    <p className="gallery-card-title text-2xl">{props.elem.author}</p>
  </a>
  )
}

export default Card