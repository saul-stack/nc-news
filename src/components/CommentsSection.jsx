import CommentCard from "./CommentCard";
import NewCommentForm from "./User-Submit/NewCommentForm";
import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../api";
import EmptyCommentsSectionCard from "./EmptyCommentsSectionCard";

export default function CommentsSection({ article }) {
  const [comments, setComments] = useState([]);
  const { article_id } = article;

  useEffect(() => {
    if (article_id) {
      getCommentsByArticleId(article_id).then((result) => {
        setComments(result);
      });
    }
  }, [article_id]);

  return (
    <section id="comments-section">
      <h2>
        <div>Comments</div>
        <div>{article.comment_count}</div>
      </h2>
      <NewCommentForm article_id={article_id} />
      <div>{comments.length < 1 && <EmptyCommentsSectionCard />}</div>
      <div>
        {comments.length >= 1 &&
          comments.map((comment) => (
            <div key={comment.comment_id}>
              <CommentCard comment={comment} />
            </div>
          ))}
      </div>
    </section>
  );
}
