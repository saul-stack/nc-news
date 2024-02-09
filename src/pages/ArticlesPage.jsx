import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import { useParams } from "react-router";

export default function Articles() {
  const requestedCategory = useParams().topic;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ requestedCategory }).then((result) => {
      setArticles(result);
    });
  }, []);

  return (
    <div>
      <h2>{`Recent articles about ${requestedCategory}`}</h2>

      <div className="article-preview-small-grid">
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticlePreviewCardSmall article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
