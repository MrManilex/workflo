import { useState } from 'react'
import { supabase } from '../../config/supabaseClient'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
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
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="m-5">
            {loading ?
                <>
                    <p>Signing Up</p>
                </>
                :
                <form onSubmit={handleLogin} className='text-center flex-col'>
                    <h1 className="text-4xl m-5">Sign Up</h1>
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
            }
        </div>
    )
}