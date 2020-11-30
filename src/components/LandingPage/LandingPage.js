import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function LandingPage() {
    return (
        <main role="main">
            <header role="banner">
                <h1>Climbing Journal</h1>
                <h2>Specialized training cycles</h2>
            </header>
            <section>
                <header>
                    <h3>Get a training plan for a specific need</h3>
                </header>
                <p>[<em>placeholder for screenshot of app</em>]</p>
                <p>Feel like your lacking in something on the wall? Need a workout plan? This app will generate a workout cycle for you to improve on your weaknesses.</p>
            </section>
            <section>
                <header>
                    <h3>Record your sessions</h3>
                </header>
                <p>[<em>placeholder for screenshot of journal interface</em>]</p>
                <p>Being able to check in with yourself before during and after a workout is important. Knowing how you feel can inform you on what the intensity should be and  helps you notice trends in your training.</p>
            </section>
            <section>
                <header>
                    <h3>Start today!</h3>
                </header>
                <SignUpForm />
            </section>
            
        </main>
    );
}
