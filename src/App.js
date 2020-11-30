import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import Journal from './components/Journal/Journal';
import CreateAWorkout from './components/CreateAWorkout/CreateAWorkout';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Workout from './components/Workout/Workout';
import LoginForm from './components/LoginForm/LoginForm';
import WorkoutLog from './components/WorkoutLog/WorkoutLog';
import './App.css';


function App() {
  return (
    <body>
      <Nav />
      <main className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/journal' component={Journal} />
        <Route path='/create-a-workout' component={CreateAWorkout} />
        <Route path='/workout' component={Workout} />
        <Route path='/login' component={LoginForm} />
        <Route path='/workout-log' component={WorkoutLog} />
      </main>
      <Footer />
    </body>
  );
}

export default App;
