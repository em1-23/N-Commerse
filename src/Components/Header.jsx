import React from 'react'

function Header() {
  return (
    <div className="Header">
      <h1 className="H1Logo">Nox</h1>
      <ul className="List">
      <input type="search" className='Input' placeholder="Search" />
        <div className="listsSection">
          <li className="Lists"><a href="">Special Products</a></li>
          <li className="Lists"><a href="">Upload Products</a></li>
          <li className="Lists"><a href="">Contact</a></li>
          <li className="Lists"><a href="">Nox's Profile</a></li>
          <li className="Lists"><a href="">Support</a></li>
        </div>
        <div className="ProfileSection">
          <li className="Lists"><button className="Button">Sign In</button></li>
          <li className="Lists"><button className="Button Outline">Log In</button></li>
        </div>
      </ul>
    </div>
  )
}

export default Header
