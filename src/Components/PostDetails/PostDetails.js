import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    return (
        <div className="total-area">
            <div className="post-area">
                <h2 class="post">{post.title}</h2>
                <hr />
                <h5 class="post">{post.body}</h5>
                <br/>
            </div>
            <Comments postId={id}></Comments>
        </div>
    );
};

export default PostDetails;