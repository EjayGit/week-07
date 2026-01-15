import {useState} from 'react'

export default function BlogPage(){
    
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
        e.preventDefault();
    }
    
    return(
        <>
            <h2>Blog Posts</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' value={formValues.staffname} required onChange={handleInputChange}/>

                <label htmlFor="post">Email: </label>
                <input type="text" name='post' value={formValues.email} required onChange={handleInputChange}/>
                
                <button type='submit'>Submit</button>
            </form>      
        </>
    )
}