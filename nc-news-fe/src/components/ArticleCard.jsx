import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const {
    article_id,
    body,
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
      <section className="article-card">
        <div className="top-data">
          <h2>{`${title}`}</h2>
          <div>Written by {`${author}`}</div>
          <div>{String(`${created_at}`).slice(0, 10)}</div>
          <Link to={`/${topic}`}>
            <div>{`${topic}`}</div>
          </Link>
        </div>
        <img src={`${article_img_url}`}></img>
        <p className="body">{`${body}`}</p>
      </section>
    </div>
  );
}
