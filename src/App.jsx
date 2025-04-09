import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
export default function App() {
  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        
      </main>
    </div>
   </div>
  )
}

