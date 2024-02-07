import { deleteCommentById } from "../../api";
export default function CommentCard({ comment }) {
  const { comment_id, body, article_id, author, votes, created_at } = comment;

  function handleClick_DeleteComment() {
    deleteCommentById(comment_id);
  }
  console.log();
  return (
    <section className="comment-card">
      <div>
        {/* get comment author image. may need to add endpoint to backend */}
        <h3>{`${author}`}</h3>
        <p className="body">{`${body}`}</p>
        <div>{`votes: ${votes}`}</div>
        <div>{`${created_at.slice(0, 10)}`}</div>
      </div>
      <div>
        <button onClick={handleClick_DeleteComment} type="button">
          Delete comment
        </button>
      </div>
    </section>
  );
}
