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
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="">
            <div className="">
                <h1 className="">Login in</h1>
                <p className="">Sign in via magic link with your email below</p>
                {loading ?
                    <>
                        <p>Sending link...</p>
                    </>
                    :
                    <form onSubmit={handleLogin}>
                        <input type="email"
                            name="email"
                            className=""
                            placeholder="your@email.com"
                            id="website"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password"
                            name="password"
                            className=""
                            placeholder="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn btn-primary">Sign Up</button>
                    </form>
                }
            </div>
        </div>
    )
}