import React, { useEffect,useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom'

const Player = () => {
  const [apiData, setApiData] = useState({
    name: '',
    published_at: '',
    typeof: '',
    key: ''
  });
  const { id } = useParams();
  const navigate = useNavigate(); 
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2I1NTExMjkwM2QxZTJlNjlhZjNiN2Q0MzY3MjFiYiIsIm5iZiI6MTc1NDg2MDk5OS44NzAwMDAxLCJzdWIiOiI2ODk5MGRjNzg5ZmE4YjBhMDUyNjdjZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qZTGmh3zcCT0efx-AEPR9c3FiPvON1qns1doSY7Vyiw'
  }
};
useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate(-1)}} />
      <iframe width="90%" height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}`} 
      frameborder="0"
      title='trailer'
      allowFullScreen
      ></iframe>
      <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div>
    </div>
  )
}

export default Player
