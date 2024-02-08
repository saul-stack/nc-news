import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);

  const sortBy = null;
  const order = null;

  let articleSort = { sortBy, order };

  useEffect(() => {
    getArticles().then((result) => {
      setArticles(result);
    });
  }, []);

  return (
    <div>
      <h2>All Articles</h2>
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
