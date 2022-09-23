import React, { useState, useEffect } from 'react'

export default function AdminSignup({ supabase }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [organization, setOrganization] = useState('')
    const [fetchError, setFetchError] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const signup = async () => {
            const { user, error } = await supabase.auth.signUp({
                email,
                password
            })
            if (error) {
                setFetchError(error)
            }
            if (user) {
                console.log(user)
                setFetchError(null)
            }
        }
        signup()
    }

    return (
        <div>
            <form className='text-center flex-col'>
                <h2 className="text-4xl m-5">Signup</h2>
                <div>
                    <input
                        type="email"
                        placeholder="Organization"
                        className="input input-bordered w-full max-w-xs my-5"
                        onChange={(e) => setOrganization(e.target.value)}
                        value={organization}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs mb-5"
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
                <button className='btn btn-info' onClick={handleClick}>Signup</button>
                {fetchError && <p>{fetchError.message}</p>}
            </form>
        </div>
    );
}

