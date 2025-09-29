import { deleteCommentById } from "../../api";
import { currentUser } from "../App";
export default function CommentCard({ comment }) {
  const { comment_id, body, article_id, author, votes, created_at } = comment;
  const userName = currentUser._currentValue.userName;

  function handleClick_DeleteComment() {
    if (userName === author) deleteCommentById(comment_id);
  }

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
        {userName === author && (
          <button onClick={handleClick_DeleteComment} type="button">
            Delete comment
          </button>
        )}
      </div>
    </section>
  );
}
