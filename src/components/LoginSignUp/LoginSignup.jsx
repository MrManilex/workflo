import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginSignup() {
    return (
        <>
            <div>
                <h2>Log In</h2>
            </div>
            <div>
                <h2>Sign Up</h2>
            </div>
            <Link to='/admin/login-signup' className='btn btn-primary'>Admin</Link>
        </>
    )
}
