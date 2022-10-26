import { Layout } from '../components/layout'
import styles from '../styles/Home.module.css'
import { Facts } from './facts'

export default function Home() {
  return (
    <div className={styles.container}>

    <Layout>
      <Facts></Facts>
    </Layout>
    </div>
  )
}
