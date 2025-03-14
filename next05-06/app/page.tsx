import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h2 className='text-3xl text-red-600 uppercase'>tailwind</h2>
    </main>
  )
}
