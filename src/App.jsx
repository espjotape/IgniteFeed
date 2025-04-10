import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content : 'Fala Galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-05-03 13:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/orodrigogo.png",
      name: "Rodrigo Gonçalves",
      role: "Head de Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content : 'Fala Galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-05-03 13:00:00'),
  },
]

export default function App() {
  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
       {posts.map(post => {
        return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
        )
       })

       }
      </main>
    </div>
   </div>
  )
}

