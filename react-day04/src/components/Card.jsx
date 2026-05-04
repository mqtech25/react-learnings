import React from 'react'
import {Bookmark} from 'lucide-react'

function Card(props) {
    return (
        <>
        <div className="card company-job-card"  >
            <div className="card-header">
                <img src={props.companyLogo} alt="" className="companies-logo" />
                <button className="save-btn">Save <Bookmark /></button>
            </div>
            <div className="card-body">
                <p className="company-name">{props.companyName} <span className='date-post'>{props.jobPost}</span></p>
                <p className="company-post-title">{props.jobTitle}</p>
                <p className="company-job">
                {props.jobType.map(function(elem){return (<span className='type'>{elem}</span>)})}
                
                <span className='type'>{props.jobLevel}</span>
                </p>
            </div>
            <div className="card-footer">
                <div className="company-hl">
                    <p className='hour'>{props.pay}</p>
                    <p className="location">{props.location}</p>
                </div>
                <div className="company-job">
                    <button className="apply-btn">Apply now</button>
                </div>
            </div>
        </div>
        </>
      )
    }

export default Card;