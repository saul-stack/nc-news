import CommentCard from "./CommentCard";
import DummyComment from "./DummyComment";
import NewCommentForm from "./User-Submit/NewCommentForm";
import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../api";

export default function CommentsSection({ article }) {
  const [comments, setComments] = useState([]);
  const { article_id } = article;

  useEffect(() => {
    getCommentsByArticleId(article_id).then((result) => {
      setComments(result);
    });
  }, [article_id]);

  return (
    <section id="comments-section">
      <h2>
        <div>Comments</div>
        <div>{`${article.comment_count}`}</div>
      </h2>

      <NewCommentForm article_id />
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <CommentCard comment={comment} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
