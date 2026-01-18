import {useState} from 'react'
import './postblogs.css'

export default function PostBlogs(){

    const [formValues, setFormValues] = useState({
        name: '',
        location: '',
        post: '',
    })

    function handleInputChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        try{
            e.preventDefault();
            fetch('http://localhost:8080/postblog',{
            // fetch('https://week-07-server.onrender.com/postblog',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({formValues}),
            });
        } catch(error){
            console.error(error.message);
        }
    }

    return(
        <>
            <form className='form' onSubmit={handleFormSubmit}>
                <label className='form-name' htmlFor="name">Name: </label>
                <input id='form-name' type="text" name='name' placeholder="Name" value={formValues.name} required onChange={handleInputChange}/>

                <label className='form-name' htmlFor="location">Location: </label>
                <input id='form-name' type="text" name='location' placeholder="Location" value={formValues.location} required onChange={handleInputChange}/>

                <label className='form-post' htmlFor="post">Blog post: </label>
                <textarea id='form-post' type="text" name='post' rows="4" cols="30" placeholder="Blog" value={formValues.post} required onChange={handleInputChange}/>
                
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}