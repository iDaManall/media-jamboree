import React from 'react'
import { useState, useEffect } from 'react'
import './Card.css'
import more from './more.png'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLikeCount = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('likeCount')
        .eq('id', props.id)
        .single();

      if (error) {
        console.error('Error fetching like count:', error);
      } else {
        setCount(data.likeCount);
      }
    };

    fetchLikeCount();
  }, [props.id]);

  const updateCount = async (event) => {
    event.preventDefault();
    event.stopPropagation(); // prevents the card's onClick event from being triggered when the like button is pressed.

    await supabase
    .from('Posts')
    .update({ likeCount: count + 1})
    .eq('id', props.id)
    
    setCount((count) => count + 1);
  }

  const handleCardClick = () => {
    navigate(`/post/${props.id}`);
  };

  return (
      
      <div className="Card" onClick={handleCardClick}>
        <Link to={`/edit/${props.id}`} onClick={(e) => e.stopPropagation()}>
          <img className="moreButton" alt="edit button" src={more} />
        </Link>
        <h2 className="name">{props.name}</h2>
        <h3 className="genre">{"Genre: " + props.genre}</h3>
        <p className="personal_thoughts">{props.personal_thoughts}</p>
        <button className="likeButton" onClick={updateCount} >👍 Like Count: {count}</button>
      </div>
      
  );
};

export default Card;