import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data);
        }
        
        fetchPosts();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post, index) => 
                   <Card key={post.id} id={post.id} name={post.name} genre={post.genre} personal_thoughts={post.personal_thoughts}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    );
};

export default ReadPosts;