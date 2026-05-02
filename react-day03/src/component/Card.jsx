import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="" />
      </div>
    <div className="card-title">
        <h1>{props.username}</h1>
        <h3>{props.age}</h3>
    </div>
    <div className="card-bio">
      {props.bio}
    </div>
    <div className="card-btn">
      <button className='view-btn'>View More</button>
    </div>
    </div>
  )
}

export default Card