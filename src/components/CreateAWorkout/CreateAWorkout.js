import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateAWorkout() {
    return (
        <div>
            <header>
                <h1>New Workout</h1>
            </header>
            <section>
                <form id="record-workout">
                    <label htmlFor="workout-title">How many days a week will you train</label>
                    <input type="number" name="times-per-week" placeholder="2" required min="1" max="5"/>
                <label htmlFor="workout-focus">Choose a focus</label>
                <select name="workout-focus" id="workout-focus">
                    <option value="strength">Strength</option>
                    <option value="power">Power</option>
                    <option value="endurance">Endurance</option>
                </select>

                <Link to="/workout"><button  type="submit">Submit</button></Link>
                    <button type="reset">Reset</button>
                </form>
            </section>
        </div>
    );
}
