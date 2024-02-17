import './blogs.css';
import Image from '../../assets/0_2.webp';
export default function Entry003() {
    return (
        <div>
            <h1>'Be not as you are but <br /> <span className='txtDcr'>as you should be'</span></h1>
            <label>High Evolutionary GOTG Vol 3</label>
            <div className='Image_div'>
                <img src={Image} className='Image' />
                <p className="caption">Random image I found on midjourney</p>
            </div>
            <p>
                A really inspirational quote, that got me thinking about where I am and where I want to be
                <br /> 
                It highlights a struggle to <span className='txtDcr'>overcome our own demons</span>, 
                weaknesses and all the things that hold us back from our true purpose<br></br>
                My goal now is to forget all past mistakes, bury them away and focus on a greater future<br></br>
                To forget whatever has happened and instead focus on <span className='txtDcr'>what I want to happen</span>
            </p>
        </div>
    )
}