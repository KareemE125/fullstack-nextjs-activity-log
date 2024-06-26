import Image from 'next/image'
import Link from 'next/link'
import NavLink from '@/components/NavLink'

export default function Navbar() {
  return (
    <section className='w-full h-full flex justify-between items-center rounded-full px-8 py-1 bg-gradient-to-r from-black via-black to-zinc-700 shadow-md border border-gray-800'>
        <Image className='pb-0.5' src="/instatus.png" alt="Instatus Logo" width={110} height={40} />
        <div className="flex items-center space-x-8 text-white">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/activity'>Activity</NavLink>
            <NavLink to='/about-us'>About</NavLink>
        </div>
        <Image className='opacity-0 hidden md:block' src="/instatus.png" alt="Instatus Logo" width={110} height={40} />
    </section>
  )
}
