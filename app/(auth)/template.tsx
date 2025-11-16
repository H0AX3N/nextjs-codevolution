'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [input, setInput] = useState("");
    const pathname = usePathname();
    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot Password', href: '/forgot-password' },
    ]

    return (
        <div>
            <div>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)} className='border border-black rounded' />
            </div>
            {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                return (
                    <Link key={index} href={link.href} className={isActive ? 'underline font-bold pl-2' : 'pl-2'}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}
