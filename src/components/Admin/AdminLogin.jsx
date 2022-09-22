import React, { useState, useEffect } from 'react';

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='m-5'>
            <form className='text-center flex-col'>
                <h2 className="text-4xl m-5">Login</h2>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs my-5"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs mb-8"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button className='btn btn-info'>Login</button>
            </form>
        </div>
    )
}
