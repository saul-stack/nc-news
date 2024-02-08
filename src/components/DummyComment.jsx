export default function DummyComment({ comment, deleteDummy, index }) {
  const { userName, body, comment_id } = comment;

  //need to somehow pass in the comment_id from the new comment.
  // will need get request to  server and refresh the comments?
  //this comment_id will then be sent as a delete request to the server
  //currently, deleting dummy_comment does not send any delete request to the server
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
