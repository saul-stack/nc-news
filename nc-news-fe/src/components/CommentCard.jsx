export default function CommentCard({ comment }) {
  const { comment_id, body, article_id, author, votes, created_at } = comment;

  return (
    <section className="comment-card">
      {/* get comment author image. may need to add endpoint to backend */}
      <h3>{`${author}`}</h3>
      <p className="body">{`${body}`}</p>
      <div>{`votes: ${votes}`}</div>
    </section>
  );
}
