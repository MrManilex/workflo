// import React, { useState, useEffect } from 'react'
import AdminLogin from '../../components/Admin/AdminLogin'
import AdminSignup from '../../components/Admin/AdminSignup'

export default function Admin({ supabase }) {
    return (
        <>
            <main className='text-center'>
                <h1 className='text-4xl mt-5'>Admin Portal</h1>
                <div className='flex place-content-evenly'>
                    <AdminLogin supabase={supabase}/>
                    <AdminSignup supabase={supabase}/>
                </div>
            </main>
        </>
    )
}
