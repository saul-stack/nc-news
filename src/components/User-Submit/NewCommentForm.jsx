import { useState } from "react";
import { submitComment } from "../../../api";
import { useParams } from "react-router";
import DummyComment from "../DummyComment";
import { currentUser } from "../../App";
import { deleteCommentById } from "../../../api";

export default function NewCommentForm() {
  const userName = currentUser._currentValue.userName;
  const { article_id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  let [dummyCommentsList, setDummyCommentsList] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCommentBody(value);
  };

  const handleSubmit = () => {
    const newComment = { userName, body: commentBody };
    setCommentBody("");
    setDummyCommentsList([newComment, ...dummyCommentsList]);
    submitComment(article_id, newComment).then((result) => {
      newComment.comment_id = result;
    });
  };

  function handleDeleteDummy(comment_index, comment_id) {
    dummyCommentsList.splice(comment_index, 1);
    setDummyCommentsList([...dummyCommentsList]);
    deleteCommentById(comment_id);
  }

  return (
    <section>
      <form>
        <div id="comment-container"></div>
        <p> {`Commenting as ${userName}`} </p>
        <textarea
          id="user-comment"
          placeholder="Share your thoughts:"
          rows="7"
          value={commentBody}
          onChange={handleChange}
          required={true}
        ></textarea>
        <div>
          <button type="button" onClick={() => commentBody && handleSubmit()}>
            Post comment
          </button>
        </div>
      </form>
      <div>
        {dummyCommentsList.map((comment, index, comment_id) => (
          <DummyComment
            comment_id={comment_id}
            key={index}
            index={index}
            comment={comment}
            deleteDummy={handleDeleteDummy}
          />
        ))}
      </div>
    </section>
  );
}
