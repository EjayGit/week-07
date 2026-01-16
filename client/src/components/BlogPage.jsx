import {useState} from 'react'
import ReadBlogs from './ReadBlogs'
import PostBlogs from './PostBlogs'


export default function BlogPage(){
    
    return(
        <>
            <PostBlogs/>
            <ReadBlogs/>
        </>
    )
}