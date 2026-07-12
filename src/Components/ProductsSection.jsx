import React from 'react'

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
        <div className="Card" style={{gridArea:"Laptop",width:"auto",backgroundColor:"#929292"}}>
          <img src="src/Imgs/ProductsIMGS/AlienWar.png" alt="Alien War"/>
          <h3>Laptop <span className='MarkName'>Alien Ware</span></h3>
          <span className="Description">Gameing Laptop</span>
          <button className="Button Buy">Buy It</button>
        </div>
        <div className="Card" style={{gridArea:"Head",backgroundColor:"#bdb6b6"}}>
          <img src="src/Imgs/ProductsIMGS/Headphones.png" alt="HeadPhones"/>
        </div>
        <div className="Card" style={{gridArea:"Mouse",backgroundColor:"#756c6c"}}>
          <img src="src/Imgs/ProductsIMGS/Mouse.png" alt="Mouse"/>
        </div>
        <div className="Card" style={{gridArea:"Watch",backgroundColor:"#a2a2a2"}}>
          <img src="src/Imgs/ProductsIMGS/Smart_Watch.png" alt="Smart Watch"/>
        </div>
        <div className="Card" style={{gridArea:"Camera",backgroundColor:"#bfcfff"}}>
          <img src="src/Imgs/ProductsIMGS/Camera.png" alt="Camera Sony"/>
        </div>
      </div>
    </div>
  )
}

export default ProductsSection