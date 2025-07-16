import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards from '../../assets/cards/Cards_data'

const TitleCard = ({title,catagory}) => {
  const cardsRef=useRef();

  const handelscroll=(e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft+=e.deltaY;
  }
  
useEffect(()=>{
cardsRef.current.addEventListener("wheel",handelscroll)
},[])

  return (
    <div className='titleCard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cards" ref={cardsRef}>
        {cards.map((card,i)=>{
         return <div className="card" key={i}>
           <img src={card.image} alt="" />
           <p>{card.name}</p>
         </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard
