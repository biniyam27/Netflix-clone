import React from 'react'
import './Home.css'
import Navbar from '../../componenet/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../componenet/TitleCard/TitleCard'
import Footer from '../../componenet/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img' />
        <div className="hero_title">
          <img src={hero_title} alt="" className='caption' />
          <p>Discovering his ties to a secret ancient order, a young
            man living in modern Istanbul embarks on a quest to save
            the city from an immortal enemy.
          </p>
        <div className="hero-btn">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark_btn'><img src={info_icon} alt="" />More info</button>
        </div>
        <TitleCard/>
        </div>
      </div>
      <div className="moreCards">
        <TitleCard title={"Blockbuster Movies"}/>
        <TitleCard title={"Only on Netflix"}/>
        <TitleCard title={"Upcoming"}/>
        <TitleCard title={"Top Pics for You"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
