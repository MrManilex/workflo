import { useState } from 'react'
import { supabase } from '../../config/supabaseClient'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signUp({
                email,
                password
            })
            if (error) throw error
            // alert('Check your email for the login link!')
        } catch (error) {
            setError(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({
                email,
                password
            })
            if (error) throw error
            // alert('Check your email for the login link!')
        } catch (error) {
            setError(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="m-5">
            {loading ?
                <>
                    <p className="text-3xl m-5">Loading</p>
                </>
                :
                <>
                    <form onSubmit={handleSignup} className='text-center flex-col'>
                        <h1 className="text-4xl m-5">Sign Up</h1>
                        {error && <p>{error}</p>}
                        <div>
                            <input type="email"
                                name="email"
                                className="input input-bordered w-full max-w-xs my-5"
                                placeholder="your@email.com"
                                id="website"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                name="password"
                                className="input input-bordered w-full max-w-xs mb-8"
                                placeholder="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-info">Sign Up</button>
                    </form>
                    <button className="btn btn-ghost mt-4" onClick={handleLogin}>Login</button>
                </>
            }
        </div>
    )
}