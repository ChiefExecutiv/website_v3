import './Nav.css';
import { Link as RouterLink } from 'react-router-dom'

function NavBar( {setMode, style} ) {
    return (
        <nav className="NavBar" style={style}>
            <RouterLink to='/' className='App-link'>
                About
            </RouterLink>
            <RouterLink to='/progress' className='App-link'>
                Progress
            </RouterLink>
            <button onClick={setMode}>Dark</button>
        </nav>
    )
}

export default NavBar