import {Link} from 'react-router'
import './navbar.css'

export default function NavBar(){
    return(
        <div className='navbar'>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/aboutpage'}>About</Link></p>
            <p><Link to={'/blogpage'}>Blog</Link></p>
        </div>
    )
}