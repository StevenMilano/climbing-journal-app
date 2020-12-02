import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

export default function Nav() {
    return (
        <nav>
            <Link className="nav-links" to="/">Home</Link>
            <ScrollLink
                className="nav-links"
                to="signup-form" 
                spy={true} 
                smooth={true} 
                duration={500} 
                activeClass='signup-form-active'>
                Sign up
            </ScrollLink>
            <Link className="nav-links" to="/create-a-workout">Create a workout</Link>
            <Link className="nav-links" to="/workout-log">Workout log</Link>
            <Link className="nav-links" to="/journal">Journal workout</Link>
        </nav>
    );
}