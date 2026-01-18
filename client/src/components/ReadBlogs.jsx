import {useState, useEffect} from 'react'
import './readblogs.css'
import LikePosts from './LikePosts'
import DeletePost from './DeletePost'

export default function ReadBlogs(){
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(
                //'http://localhost:8080/readblogs'
                'https://week-07-server.onrender.com/readblogs'
            );
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        }
        const pollingInterval = setInterval(fetchData, 2000);
        return () => clearInterval(pollingInterval);
    }, []);

    return(
        <div className='blog-container'>
            <h2>Blog Posts</h2>
            {blogs.map((blog, index) => {
                return( 
                <div className='blog' key={index}>
                    <div className='blog-name'>{blog.name}</div>
                    <div className='blog-location'>{blog.location}</div>
                    <div className='blog-post'>{blog.blogpost}</div>
                    <div className='blogBtns'>
                        <LikePosts id={blog.id} likes={blog.likes}/>
                        <DeletePost id={blog.id}/>
                    </div>
                </div>)
            })}
        </div>
    );
}