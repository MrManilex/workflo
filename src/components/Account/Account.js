import { useState, useEffect } from "react"

const Account = ({ session, supabase }) => {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    const getProfile = async () => {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
            }

        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const user = supabase.auth.user();

            const updates = {
                id: user.id,
                username,
                website,
                updated_at: new Date()
            }

            let { error } = await supabase.from("profiles")
                .upsert(updates, { returning: 'minimal' })

            if (error) {
                throw error;
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div aria-live="polite" >
            {loading ? (
                'Saving ...'
            ) : (
                <form onSubmit={updateProfile} >
                    {/* <div>Email: {session.user.email}</div> */}
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
                    <div >
                        <button disabled={loading}>
                            Update Profile
                        </button>
                    </div>
                    <div className="text-center">
                        <button type="button" onClick={() => supabase.auth.signOut()}>
                            Sign Out
                        </button>
                    </div>
                </form>
            )}

        </div>
    )


}

export default Account;