import React, { useEffect, useRef,useState } from 'react'
import './TitleCard.css'
import cards from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCard = ({title,catagory}) => {
  const cardsRef=useRef();
  const [apiData, setApiData] = useState([]);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2I1NTExMjkwM2QxZTJlNjlhZjNiN2Q0MzY3MjFiYiIsIm5iZiI6MTc1NDg2MDk5OS44NzAwMDAxLCJzdWIiOiI2ODk5MGRjNzg5ZmE4YjBhMDUyNjdjZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qZTGmh3zcCT0efx-AEPR9c3FiPvON1qns1doSY7Vyiw'
  }
};



  const handelscroll=(e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft+=e.deltaY;
  }
  
useEffect(()=>{
cardsRef.current.addEventListener("wheel",handelscroll)
fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
},[])

  return (
    <div className='titleCard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cards" ref={cardsRef}>
        {apiData.map((card,i)=>{
         return <Link to={`/player/${card.id}`} className="card" key={i}>
           <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
           <p>{card.original_title}</p>
         </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard
