'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  to: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({to, children, className}: NavLinkProps) {
  const pathName = usePathname()

  return (
    <Link 
        href={to} 
        className={
            'font-bold hover:scale-110 hover:text-teal-500'
            + ' '+(pathName === to ? 'scale-110 text-teal-500' : 'text-white')
            + ' ' + className
        } 
    >
        {children}
    </Link>
  )
}
