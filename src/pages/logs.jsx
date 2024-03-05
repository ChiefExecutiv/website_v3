import './logs.css';
import List_item from '../components/Li_item';

export default function Logs() {

    const logs = [
    {
        Key: 1,
        Date: 2024,
        Page: '2024',
        Title: "What I want from 2024",
        Entry: '001'
    },

    {
        Key: 2,
        Date: 2024,
        Title: "What is wrong with Uganda",
        Page: 'EconUg',
        Entry: '002'
    },

    {
        Key: 3,
        Title: "As you should be",
        Page: 'Asysb',
        Entry: '003'
    }
    ,
    ]


    const AllLogs = logs.map(log => (
        <List_item key={log.Key} Date={log.Date} Title={log.Title} Views={log.Entry} Page={log.Page} />
    ));
    
    return (
        <main class="main_level_2_">
            <header class="header_main_2_">
                <button class="button_2_">Date</button>
                <span>title</span>
                <button class="button_2_2_">Entry</button>
            </header>
            <ul>
                {AllLogs}
            </ul>
        </main>
    )
}