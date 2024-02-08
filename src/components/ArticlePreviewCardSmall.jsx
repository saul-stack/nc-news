import { Link, useLocation } from "react-router-dom";

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
      <Link to={`/articles/${topic}/${article_id}`}>
        <div className="article-preview-card-small">
          <img className="article-preview-image-small" src={article_img_url} />
          <h2>{`${title}`}</h2>
          <ul className="article-details">
            <li className="detail">{`${created_at.slice(0, 10)}`}</li>
            <li className="detail">{`${author}`}</li>
            <li className="detail">{`Votes: ${votes}`}</li>
            <Link to={`/articles/${topic}`}>
              <li className="detail">{`${topic}`}</li>
            </Link>
          </ul>
        </div>
      </Link>
    </div>
  );
}
