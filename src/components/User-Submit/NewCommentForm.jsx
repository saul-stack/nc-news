import { useState } from "react";
import { submitComment } from "../../../api";
import { useParams } from "react-router";
import DummyComment from "../DummyComment";
import { currentUser } from "../../App";

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
    submitComment(article_id, newComment);
    setCommentBody("");
    setDummyCommentsList([newComment, ...dummyCommentsList]);

    //when the submission is sent, it should refresh the comments on the page again
    // getCommentsByArticleId(article_id).then((result) => {
    //   setComments(result);
    // });
  };

  function handleDeleteDummy(comment_index) {
    dummyCommentsList.splice(comment_index, 1);
    setDummyCommentsList([...dummyCommentsList]);
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
        {dummyCommentsList.map((comment, index) => (
          <DummyComment
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
