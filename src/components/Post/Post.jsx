import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
 
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, content, publishedAt}){
const [comments, setComments] = useState([ 'Post Bacana Maykão' ])
const [newCommentText, setNewCommentText] = useState('')

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
});

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true,
});

function handleCreateNewContent() {
  event.preventDefault();
  setComments([...comments, newCommentText]);
  setNewCommentText('');
}

function handleNewCommentChange(){
  setNewCommentText(event.target.value)
}

function deleteComment(commentToDelete) {
  const commentsWithoutDeletedOne = comments.filter(comment => {
    return comment !== commentToDelete;
  })

  setComments(commentsWithoutDeletedOne)
}

 return(
  <article className={styles.post}>
   <header>
    <div className={styles.author}>
     <Avatar hasBorder src={author.avatarUrl}/>
     <div className={styles.authorInfo}>
      <strong>{author.name}</strong>
      <span>{author.role}</span>
     </div>
    </div>

    <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>
    {publishedDateRelativeToNow}
    </time>
   </header>
   <section className={styles.content}>
    {content.map(line => {
      if (line.type === 'paragraph') {
        return <p key={line.content}>{line.content}</p>
      }else if(line.type === 'link') {
        return <p key={line.content}><a href="#">{line.content}</a></p>
      }
    })}
   </section>

   <form onSubmit={handleCreateNewContent} className={styles.commentForm}>
    <strong>Deixe seu feedback</strong>

    <textarea
     name="comment"
     value={newCommentText}
     placeholder="Deixe um comentário"
     onChange={handleNewCommentChange}
    />
    
    <footer>
     <button type='submit'>Publicar</button>
    </footer>
   </form>

   <section className={styles.commentList}>
     {comments.map(comment => {
        return (
        <Comment
        key={content}
        content={comment}
        OnDeleteComment={deleteComment}
        />
      )
     })}
   </section>
  </article>
 )
}