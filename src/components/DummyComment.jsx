export default function DummyComment({ comment }) {
  const { userName, body } = comment;

  return (
    <section className="comment-card">
      <h3>{userName}</h3>
      <p className="body">{body}</p>
      <div>votes: 0</div>
      <div>Just now</div>
    </section>
  );
}
