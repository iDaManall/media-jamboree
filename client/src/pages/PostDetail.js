import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
    };

    const fetchTotalLikes = async () => {
        const { data, error } = await supabase
          .from('Posts')
          .select('likeCount');
  
        if (error) {
          console.error('Error fetching total likes:', error);
        } else {
          const total = data.reduce((acc, post) => acc + post.likeCount, 0);
          setTotalLikes(total);
        }
    };

    fetchPost();
    fetchTotalLikes();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const likePercentage = totalLikes > 0 ? ((post.likeCount / totalLikes) * 100).toFixed(2) : 0;
  const isPopular = likePercentage > 20; // Set your threshold here

  return (
    <div className="post-detail">
      <h2>{post.name}</h2>
      <h3>Genre: {post.genre}</h3>
      <p>This post was liked {post.likeCount} times</p>
      <p>Percentage of Total Likes: {likePercentage}%</p>
      {isPopular && <p>This post is really popular!</p>}
      <p><em>The author's note: {post.personal_thoughts}</em></p>
    </div>
  );
};

export default PostDetail;