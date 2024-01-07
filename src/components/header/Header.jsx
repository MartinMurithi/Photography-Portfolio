import React from 'react'
import "./Header.css";
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <header>
      <Navbar/>
      <div className="headerText">
                <h2 className='headerText1'>Hello! I'm Roy Wangui</h2>
        <p className='headerText2'>A freelance photographer from Nairobi, Kenya</p>
        <button className="viewGallery">View Gallery</button>
      </div>

    </header>
  )
}

export default Header