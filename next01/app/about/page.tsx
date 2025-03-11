import styles from '../page.module.css'
import { Inter, Lato } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  style: 'normal',
  weight: '400',
  subsets: ['latin']
});

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>About page</h1>
      <h1 className={lato.className}>About two header</h1>
    </main>
  )
}
