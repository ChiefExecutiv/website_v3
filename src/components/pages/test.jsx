import MyItems from '../Progress';
import { Link } from 'react-router-dom';
import './test.css';

const Item = ({Date, Entry_No, Content }) => {

    return (
        <Link to={`/progress/${Entry_No}`} className='Item_Link'>
        <li>
            <span>{Date}</span>
            <span>{Entry_No}</span>
            <p>{Content}</p>
        </li>
        </Link>
    )
}

export default function Test() {
    const AllItems = MyItems.map((item) => 
        (<Item
            key={item.Entry}
            Date={item.Date}
            Entry_No={item.Entry}
            Content={item.Content} 
        />)
    )
    
    return (
        <div className="Body">
        <header className='header'>
            <label>Date</label>
            <label>Entry No.</label>
            <label>Content</label>
        </header>

        <section className='Section'>
            <ul>
                {AllItems}
            </ul>
        </section>
    </div>
    )
}