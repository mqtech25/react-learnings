import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
  <>
    <div className="product-links flex flex-wrap gap-20 justify-center">
    <Link to={'men'}>Men</Link>
  <Link to={'women'}>Women</Link>
    </div>
    <div className='text-center mt-30'>
    <h1>Product</h1>
    <Outlet/>
    </div>
  </>
  )
}
