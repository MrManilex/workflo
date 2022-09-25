import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Account = ({ session, supabase }) => {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        getProfile()
        // if (username !== null && website === null) {
        //     navigate('/projects')
        // }
    }, [session])

    const getProfile = async () => {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url, admin`)
                .eq('id', user.id)
                .single()

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setIsAdmin(data.admin)
            }
            if (data.username !== null) {
                navigate('/projects')
            }

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()
        
        if ( username === null ) {
            setError('Please enter a username')
            return
        }

        try {
            setLoading(true)
            const user = supabase.auth.user()

            const updates = {
                id: user.id,
                username,
                website,
                updated_at: new Date(),
                admin: isAdmin
            }

            let { error } = await supabase.from("profiles")
                .upsert(updates, { returning: 'minimal' })

            if (error) {
                throw error;
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
            navigate('/projects')
        }
    }

    return (
        <div aria-live="polite" >
            {loading ? (
                'Saving ...'
            ) : (
                <form onSubmit={updateProfile} >
                    <div>Email: {session.user.email}</div>
                    <div>
                        <input type="text"
                            name="text"
                            id="username"
                            placeholder="Your Name"
                            value={username || ''}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name="text"
                            placeholder="your@website.com"
                            id="website"
                            value={website || ''}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                    <label className="label cursor-pointer">
                        <span className="label-text">Admin</span>
                        <input type="checkbox"
                            className="checkbox checkbox-primary"
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(!isAdmin)}
                        />
                    </label>
                    <div>
                        {error && <p>{error}</p>}
                        <button disabled={loading}>
                            Update Profile
                        </button>
                    </div>
                </form>
            )}

        </div>
    )


}

export default Account;