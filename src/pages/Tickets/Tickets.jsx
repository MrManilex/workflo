import React, { useState, useEffect } from 'react'
import supabase from '../../config/supabaseClient'
import TicketCard from '../../components/TicketCard/TicketCard'

export default function Tickets() {
    const [fetchError, setFetchError] = useState(null)
    const [tickets, setTickets] = useState(null)

    useEffect(() => {
        const fetchTickets = async () => {
            const { data, error } = await supabase
                .from('ticket')
                .select()

            if (error) {
                setFetchError('Could not fetch the tickets')
                setTickets(null)
            }
            if (data) {
                setTickets(data)
                setFetchError(null)
            }
        }
        fetchTickets()
    })

    return (
        <>
            <main className='text-center'>
                {fetchError && (<p>{fetchError}</p>)}
                {tickets &&
                    <div className='tickets'>
                        {tickets.map(ticket => (
                            <TicketCard key={ticket.id} ticket={ticket}/>
                        ))}
                    </div>
                
                }
            </main>
        </>
    )
}
