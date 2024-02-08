export default function DummyComment({ comment, deleteDummy, index }) {
  const { userName, body, comment_id } = comment;
  console.log(comment_id);
  return (
    <section className="comment-card">
      <h3>{userName} This is a dummy comment, optimistic rendering</h3>
      <p className="body">{body}</p>
      <div>votes: 0</div>
      <div>Just now</div>

      <button type="button" onClick={() => deleteDummy(index, comment_id)}>
        Delete comment
      </button>
    </section>
  );
}
