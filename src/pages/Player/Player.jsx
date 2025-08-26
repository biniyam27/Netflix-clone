import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {
  const [apiData, setApiData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); 

  const API_KEY=import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {
  if (!id) return null; 

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      if (res.results && res.results.length > 0) {
        setApiData(res.results[0]);
      } else {
        setApiData({}); 
      }
    })
    .catch(err => console.error(err));
}, [id]);


  return (
    <div className="player">
      <img src={back_arrow} alt="Go back" onClick={() => navigate("/")} />
      
      {apiData && apiData.key ? (
        <>
         <iframe
  width="90%"
  height="90%"
  src={`https://www.youtube.com/embed/${apiData.key}`}
  frameBorder="0"
  title="trailer"
  allowFullScreen
></iframe>

<div className="player-info">
  <p>{apiData.published_at ? apiData.published_at.slice(0,10) : "No date"}</p>
  <p>{apiData.name || "No name"}</p>
  <p>{apiData.type || "No type"}</p>
</div>

        </>
      ) : (
        <p>No trailer available for this movie.</p>
      )}
    </div>
  );
};

export default Player;

