import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function CourseDetail() {
  const params =useParams()

  console.log(params);
  return (

    <div>CourseDetail</div>
  )
}

export default CourseDetail