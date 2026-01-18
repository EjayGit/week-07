import { useEffect, useState } from 'react';
import './likeposts.css'

export default function LikePosts({id, likes}){
    
    useEffect(()=>{

    });
    
    function likeHandler(){
        try {
            let likeData = {
            id: id,
            value: 1
            };
            console.log(likeData);
            console.log(id);
            //fetch(`http://localhost:8080/likes`,{
            fetch(`https://week-07.onrender.com/likes`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({likeData}),
            });
        } catch(error){
            console.error(`Error main.js ln 30: ${error.message}`);
        }
    }
    return(
        <div>
            <button className='likeBtn' onClick={likeHandler}>Likes {likes}</button>
        </div>
    )
}
