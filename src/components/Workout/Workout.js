import React from 'react'
import { Link } from 'react-router-dom'

export default function Workout() {
    return (
        <div>
            <h2>Workout</h2>
            <Link to='/journal'><button>Journal session</button></Link>
        </div>
    )
}
