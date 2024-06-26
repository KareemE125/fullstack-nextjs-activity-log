'use client'
import Button from '@/components/shared/Button'
import Image from 'next/image'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className='h-screen absolute inset-0 flex flex-col md:flex-row'>
      <section className='h-full w-full flex flex-col gap-12 text-center justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-yellow-100'>
        <h2 className='-mt-28 text-2xl font-bold text-gray-200'>{error ? error.toString() : 'Something went wrong!'}</h2>
        <Button title='Try again' clickHandler={() => reset()}  />
      </section>
      <section className='w-full hidden md:block'>
        <Image 
            className='h-full w-full object-cover object-bottom'
            src='https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80' 
            alt='Error' 
            width={400} 
            height={400} 
        />
      </section>
    </main>
  )
}