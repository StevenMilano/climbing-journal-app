import React, {useState} from 'react';
import { Element } from 'react-scroll'
// import axios from 'axios';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/ApiConstants';
import { Route, withRouter, Link } from "react-router-dom";

function SignUpForm(props) {
    return(
        <div className="signup-form">
            <Element id='signup-form' name='signup-form'>
                <form>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" />
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"/>
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"/>
                    <button 
                        type="submit" 
                        className="btn btn-primary">
                        Register
                    </button>
                </form>
                <div>
                    {/* {successMessage} */}
                </div>
                <div>
                <span>Already have an account? </span>
                <Link to='/login'><span className="loginText">Login here</span></Link>
                </div>
            </Element>
        </div>
    )
}

export default withRouter(SignUpForm);