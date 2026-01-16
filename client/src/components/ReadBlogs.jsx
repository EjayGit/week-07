import {useState, useEffect} from 'react'

export default function ReadBlogs(){
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(
                'http://localhost:8080/readblogs'
                // 'https://week-07-server.onrender.com/readblogs'
            );
            const data = await response.json();
            console.log("DATA FROM BACKEND:", data);
            setBlogs(data);
        }
        fetchData();
    }, []);

    return(
        <div className='blog-container'>
            {blogs.map((blog, index) => {
                return( 
                <div className='blog' key={index}>
                    <div className='blog-name'>{blog.name}</div>
                    <div className='blog-post'>{blog.blogpost}</div>
                </div>)
            })}
        </div>
    );
}