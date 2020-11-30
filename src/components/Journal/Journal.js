import React from 'react';
import { Link } from 'react-router-dom';

export default function Journal() {
    return (
        <div>
            <header>
                <h1>New Journal Entry</h1>
            </header>
            <section>
                <form id="create-workout">
                    <label htmlFor="workout-title">workout title</label>
                    <input type="text" name="workout-title" placeholder="Power Day 11/12" required/>
                    <label htmlFor="feeling-rating">How do you feel from 1-10</label>
                    <input type="number" name="feeling-rating" id="feeling-rating" placeholder="8" min="1" max="10"/>
                    <label htmlFor="workout-summary">workout summary</label>
                    <textarea name="workout-summary" rows="15" required></textarea>
                    <label className="workout-date-label" htmlFor="date-month">Date of workout</label>
                    <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required=""/> .
                    <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required=""/> .
                    <input type="number" name="date-year" className="date-year" placeholder="2020" min="2020" max="3000" required=""/>
                    <Link to="/workout-log"><button type="submit">Submit</button></Link>
                    <button type="reset">Reset</button>
                </form>
            </section>
        </div>
    );
}
