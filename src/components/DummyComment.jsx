export default function DummyComment({ comment }) {
  const { userName, body, comment_id } = comment;

  function handleClick_DeleteDummyComment() {
    // trigger a re render of the dummyCommentsList
    console.log("trying to delete the dummy comment");
  }

  return (
    <section className="comment-card">
      <h3>{userName} Dummy COMMETNT!!</h3>
      <p className="body">{body}</p>
      <div>votes: 0</div>
      <div>Just now</div>

      <button onClick={handleClick_DeleteDummyComment} type="button">
        Delete comment
      </button>
    </section>
  );
}
