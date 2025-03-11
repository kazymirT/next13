import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <nav>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
          <Link href={'/'}>Home</Link>
          </nav>
          </header>
        {children}
        <footer>Root Footer</footer>
        </body>
    </html>
  )
}
