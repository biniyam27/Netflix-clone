import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Search from '../../assets/search_icon.svg'
import Bell from '../../assets/bell_icon.svg'
import Profile from '../../assets/profile_img.png'
import cart from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'



const Navbar = () => {
  const navRef=useRef();
  useEffect(() => {
  const handleScroll = () => {
    if (!navRef.current) return;
    if (window.scrollY >= 80) {
      navRef.current.classList.add("nav_black");
    } else {
      navRef.current.classList.remove("nav_black");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div ref={navRef} className='navbar'>
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
              <p onClick={()=>{logout()}}>Sign out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
