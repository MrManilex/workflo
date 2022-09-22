import React from 'react'

export default function TicketCard({ ticket }) {
    return (
        <>
            <div>
                <h2>{ticket.status} | {ticket.content.description} | {ticket.attention}</h2>
            </div>
            <p>{ticket.content.goal}</p>
            <div className='assigned-to'>
                <div>Assigned To:
                    {ticket.assignees &&
                        ticket.assignees.map(person => (
                            // grab profile name here 
                            <p>{person}</p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
