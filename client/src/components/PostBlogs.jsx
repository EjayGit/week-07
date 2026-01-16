import {useState} from 'react'

export default function PostBlogs(){

    const [formValues, setFormValues] = useState({
        name: '',
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
            //fetch('https://week-07-server.onrender.com/postblog',{
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
            <h2>Blog Posts</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' value={formValues.staffname} required onChange={handleInputChange}/>

                <label htmlFor="post">Blog post: </label>
                <input type="text" name='post' value={formValues.email} required onChange={handleInputChange}/>
                
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}