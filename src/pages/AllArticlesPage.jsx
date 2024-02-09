import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import SortArticlesBy from "../components/SortArticlesBar";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");

  function handleState(sort_by) {
    setSort_by(sort_by);
  }

  useEffect(() => {
    getArticles({ sort_by }).then((result) => {
      setArticles(result);
    });
  }, [sort_by]);

  return (
    <div>
      <h2>All Articles</h2>
      <SortArticlesBy changeChoice={handleState} />
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
