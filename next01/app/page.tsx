import styles from './page.module.css'
import { Inter, Lato } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  style: 'normal',
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Hello world!</h1>
      <h1 className={lato.className}>Two fonts</h1>
    </main>
  )
}
