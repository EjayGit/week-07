import {Link} from 'react-router'

export default function NavBar(){
    return(
        <>
            <p>Navbar</p>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/aboutpage'}>About</Link></p>
            <p><Link to={'/blogpage'}>Blog</Link></p>
        </>
    )
}