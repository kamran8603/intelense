import React from 'react'
import "../css/Product.css"

function Products() {
  return (
    <div className='product-container'>
        <div className='first-section'>
            <img className='side-img' src="https://framerusercontent.com/images/CkZeSiNQSOCeZlmD2gatB7yUI.png?scale-down-to=512" />
            <div className='text-container'>
                <h1 className='tranform-data'>Transforming data into decisions</h1>
                <p className='transform-para'>Decongest data, identify anomalies in complex real-time analytics, and create centralized systems to enable organizations make smarter, faster, and more cost-effective decisions.</p>
                <button className='scedule-a-demo' >Schedule a demo <span className='arrow'>➝</span></button>
            </div>
            <img className='right-side-img' src="https://framerusercontent.com/images/CkZeSiNQSOCeZlmD2gatB7yUI.png?scale-down-to=512" />

        </div>
        <div className='others-section'>

        </div>
      product
    </div>
  )
}

export default Products
