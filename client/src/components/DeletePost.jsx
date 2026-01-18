import './deletepost.css'

export default function DeletePost({id}){
    
    async function deleteHandler(){
        try{
            //const response = await fetch(`http://localhost:8080/${id}`, {
            const response = await fetch(`https://week-07.onrender.com/${id}`, {
            method: "DELETE",
            });
        } catch (error){
            console.error(`Error main.js line 10: ${error.message}`);
        }
    }
    return(
        <div>
            <button className='delBtn' onClick={deleteHandler}>Delete</button>
        </div>
    )
}