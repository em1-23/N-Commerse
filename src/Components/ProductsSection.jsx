import React from 'react'
import { ArrayOfProducts } from '../Data/ProductsSpecial'
function ProductsSection() {
  return (
    <div className='ProductsSection'>
      <div className="ProductsType">
        <li>Laptops</li>
        <li>Pc's Parts</li>
        <li>Smart Watchs</li>
        <li>Phones</li>
        <li>Office</li>
        <li>Cameras</li>
        <li>Storge</li>
        <li>USB</li>
        <li>Chargers</li>
      </div>
      <div className="Products">
        {ArrayOfProducts.map((Map)=>(
          <div className="Card" key={Map.id} style={Map.style}>
            <img src={Map.PhotoLink} alt={Map.Name}/>
            <h3>{Map.Name} <span className='MarkName'>{Map.MarkName}</span></h3>
            <span className="Description">{Map.TypeOfName}</span>
            <button className="Button Buy">Buy It</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsSection