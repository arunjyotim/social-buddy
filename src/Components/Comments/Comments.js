import React, { useEffect, useState } from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Comments = (props) => {
    const postId=props.postId;
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])


    
    return (
        <div>
            {
            comments.map(comment =><CommentSection comment={comment}></CommentSection>)
            }
        </div>
    );
};

export default Comments;