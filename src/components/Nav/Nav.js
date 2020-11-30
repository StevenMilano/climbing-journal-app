import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <ScrollLink
                to="signup-form" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='signup-form' 
                activeClass='signup-form-active'>
                Sign up
            </ScrollLink>
            <Link to="/create-a-workout">Create a workout</Link>
            <Link to="/workout-log">Workout log</Link>
            <Link to="/journal">Journal workout</Link>
        </nav>
    );
}