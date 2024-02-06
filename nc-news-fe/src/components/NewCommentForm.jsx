import { useState } from "react";
import { submitComment } from "../../api";
import { useParams } from "react-router";
import CommentCard from "./CommentCard";

export default function NewCommentForm() {
  const [commentBody, setCommentBody] = useState("");
  const [userName, setUserName] = useState("defaultUser");
  const { article_id } = useParams();
  console.log(article_id);

  function handleSubmit() {
    submitComment(article_id, {
      userName: "grumpy19",
      body: commentBody,
    });
    // return <CommentCard />;
  }
  let userComment = { userName: userName, body: commentBody };

  return (
    <section>
      <form
        onChange={() => {
          setCommentBody(document.getElementById("user-comment").value);
        }}
      >
        <div id="comment-container"></div>
        <textarea
          id="user-comment"
          placeholder="Enter comment: "
          cols=""
          rows="5"
        ></textarea>
        <button type="button" onClick={() => handleSubmit()}>
          Post
        </button>
      </form>
    </section>
  );
}

// when post button clicked:
// send request to api
// re render a comment card with this comment (optimistic rendering)

//document.getElementById("user-comment")value.includes('<body>').
