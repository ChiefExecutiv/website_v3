import './Nav.css';
import { Link as RouterLink } from 'react-router-dom'

function NavBar( {setMode, style, btnText} ) {
    return (
        <nav className="NavBar" style={style}>
            <RouterLink to='/' className='App-link'>
                About
            </RouterLink>
            <RouterLink to='/progress' className='App-link'>
                Progress
            </RouterLink>
            <button onClick={setMode}>{btnText}</button>
        </nav>
    )
}

export default NavBar