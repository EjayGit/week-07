import {useState} from 'react'
import ReadBlogs from './ReadBlogs'
import PostBlogs from './PostBlogs'
import './blogpage.css'

export default function BlogPage(){
    
    return(
        <div className='flex flex-col items-center gap-[10px]'>
            <PostBlogs className='post-blogs'/>
            <ReadBlogs className='read-blogs'/>
        </div>
    )
}