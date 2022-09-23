import React from 'react'
import Auth from '../../components/Auth/Auth'

export default function Landing({ supabase }) {
    return (
        <main className='text-center'>
            <Auth supabase={supabase} />
        </main>
    )
}
