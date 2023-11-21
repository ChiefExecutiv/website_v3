import { Link as RouterLink } from 'react-router-dom';

function About(){

    return (
        <div>
            <h3>Benjamin</h3>
            <p>
                To whoever somehow ends up reading this,<br></br>this is my
                own little journal to keep track of my steps <br></br>on a million mile
                journey <br></br>with a million possible destinations.
            </p>

            <p>
                At the time of writing this, I'm an economics student <br></br>but with deviant-like 
                attraction to computers.<br></br>I couldn't qualify for a computer science course.<br></br>
                However, I still learn computer science
                science.<br></br>
                At the time, I have learnt programming in python, <br></br>javaScript and ofcourse html and css.
                <br></br>I wish to go beyond where I am now, far, far beyond
            </p>

            <p>
                So why am I bothering myself, <br></br>economics is hard enough already, 
                <br></br>why add on
                computer science?<br></br>
                The answer is simple and really cheesy, <br></br>
                I want to be something greater,<br></br>
                something much more <br></br>than what everyone around me expects me to be.
                <br></br>I want to create amazing things, 
                <br></br>I want to be a keystone in the 
                grand structure of humanity.<br></br>
                I'm hoping that by learning to code,<br></br> I can build software, that would change lives<br></br>
                I want to be anything but your everyday human.
            </p>

            <p>
                Incase you're interested, read my  
                <RouterLink to='/year_review' className='link'>
                      2023 year in review
                </RouterLink>
            </p>

        </div>
    )
}

export default About