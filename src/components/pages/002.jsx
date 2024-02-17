import './blogs.css';
import Image1 from '../../assets/image1.png';
export default function Entry002() {
    return (
        <div>
            <h1>Systematic Program design</h1>
            <p>
                This is actually the first unit of my open source computer science degree
                program.<br></br>
                Really educational content.It gives a basic foundation on how
                to create <span className='txtDcr'>quality software</span><br></br>
                After going through the course, I realised how garbage my code was.
                <div className='Image_div'>
                    <img src={Image1} className='Image'/>
                </div>
                So pictured above is a snippet of what I have been studying in this course<br />
                The programming language used is 'racket', I think, fairly easy language, not too syntax heavy<br></br>
                I can say, my code is <span className='txtDcr'>10% better now</span> than it was before
            </p>
        </div>
    )
}