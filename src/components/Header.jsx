import { Link } from 'react-router-dom';
import Button from './Button';
import './Header.css';

export default function Header({click_Event}) {
    return (
    <header className="header_main_1_">

        <Link to='/' className="name_span_1_">
            <span className="name_span_1.1_">
                Journals
            </span>
        </Link>

        <nav className="nav_main_1_">
            <Button click_Event={click_Event} btn_Name="Dark"/>

            <Link to='/about'>
                About
            </Link>

            <a href="https://github.com/ChiefExecutiv">
                My Github
            </a>
        </nav>
    </header>
    )
}