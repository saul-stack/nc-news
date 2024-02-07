import { useState } from "react";
import { submitComment } from "../../../api";
import { useParams } from "react-router";
import DummyComment from "../DummyComment";

//currently hardcoded, will use context to pass userName in from the top
const userName = "tickle122";

export default function NewCommentForm() {
  const { article_id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  let [dummyCommentsList, setDummyCommentsList] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCommentBody(value);
  };

  const handleSubmit = () => {
    if (commentBody) {
      const newComment = { userName, body: commentBody };
      submitComment(article_id, newComment);
      setCommentBody("");
      setDummyCommentsList([newComment, ...dummyCommentsList]);
    } else {
      //need to create a popup or dialog etc. to prompt the user to post a comment
      console.log("error, user not submitted comment");
    }
  };

  return (
    <section>
      <form>
        <div id="comment-container"></div>
        <textarea
          // label={`Commenting as: ${userName}`}
          id="user-comment"
          placeholder="Share your thoughts:"
          rows="7"
          value={commentBody}
          onChange={handleChange}
          required={true}
        ></textarea>
        <div>
          <button type="button" onClick={handleSubmit}>
            Post comment
          </button>
        </div>
      </form>
      <div>
        {dummyCommentsList.map((comment, index) => (
          <DummyComment key={index} comment={comment} />
        ))}
      </div>
    </section>
  );
}
