import {useState} from 'react'
import ReadBlogs from './ReadBlogs'
import PostBlogs from './PostBlogs'
import './blogpage.css'

export default function BlogPage(){
    
    return(
        <div className='blog-page'>
            <PostBlogs className='post-blogs'/>
            <ReadBlogs className='read-blogs'/>
        </div>
    )
}