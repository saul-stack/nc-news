import { useEffect, useState } from "react";
import { getArticlesByCategory } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import { useParams } from "react-router";

export default function ArticlesByCategory() {
  const requestedCategory = useParams().topic;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByCategory(requestedCategory).then((result) => {
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
