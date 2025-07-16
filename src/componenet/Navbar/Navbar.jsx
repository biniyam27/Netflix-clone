import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Search from '../../assets/search_icon.svg'
import Bell from '../../assets/bell_icon.svg'
import Profile from '../../assets/profile_img.png'
import cart from '../../assets/caret_icon.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
      <img src={Logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      </div>
      <div className="right">
       <img src={Search} alt="" className='icons' />
       <p>Children</p>
        <img src={Bell} alt="" className='icons' />
        <div className="profile-section">
            <img src={Profile} alt="" className='profile' />
            <img src={cart} alt="" />
            <div className="dropdown">
              <p>Sign out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
