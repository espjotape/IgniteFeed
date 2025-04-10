import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
 return(
  <div className={styles.comment}>
   <img src="https://github.com/maykbrito.png"/>

   <div className={styles.commentBox}>
    <div className={styles.commentContent}>
     <header>
      <div className={styles.authorAndTime}>
       <strong>Mayk Brito</strong>
       <time title="09 de Abril às 15:22h" datetime="2022-04-09 15:22:30">Cerca de 1h atrás</time>
      </div>

      <button>
       <Trash size={20}/>
      </button>
     </header>
     <p>Muito bom Mayk, parabéns!!</p>
    </div>
    <footer>
     <button>
      <ThumbsUp/>
      Aplaudir 
      <span>33</span>
     </button>
    </footer>
   </div>
  </div>
 )
}