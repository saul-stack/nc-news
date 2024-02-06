import { Link } from "react-router-dom";

export default function ArticlePreviewCardSmall({ article }) {
  const {
    article_id,
    title,
    topic,
    author,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;
  return (
    <div>
      <div className="article-preview-card-small">
        <Link to={`/${topic}/${article_id}`}>
          <img className="article-preview-image-small" src={article_img_url} />
          <h2>{`${title}`}</h2>
        </Link>
        <div className="article-details">
          <ul>{`${created_at.slice(0, 10)}`}</ul>
          <ul>{`${author}`}</ul>
          <Link to={`/${topic}`}>
            <ul>{`${topic}`}</ul>
          </Link>
        </div>
      </div>
    </div>
  );
}
