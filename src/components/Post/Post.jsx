import styles from './Post.module.css'

export function Post(){
 return(
  <article className={styles.post}>
   <header>
    <div className={styles.author}>
     <img src="https://github.com/diego3g.png"/>
     <div className={styles.authorInfo}>
      <strong>Diego Fernandes</strong>
      <span>Web developer</span>
     </div>
    </div>

    <time title="09 de Abril às 15:22h" datetime="2022-04-09 15:22:30">Publicado há 1h</time>
   </header>
   <section className={styles.content}>
    <p>Fala galeraa 👋</p>
    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
    <p><a href="">👉{' '}jane.design/doctorcare</a></p>
    <p>
     <a href="">#novoprojeto</a>{' '}
     <a href="">#nlw</a>{' '}
     <a href=""> #rocketseat</a>{' '}
    </p>
   </section>
  </article>
 )
}