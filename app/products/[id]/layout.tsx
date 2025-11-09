import React from 'react'

export default function ReviewLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <h1>Review Layout</h1>
        </div>
    )
}
