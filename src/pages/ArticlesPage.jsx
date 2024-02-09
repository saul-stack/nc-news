import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import SortArticlesBy from "../components/SortArticlesBar";
import { useParams } from "react-router";

export default function Articles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");

  function handleState(sort_by) {
    setSort_by(sort_by);
  }

  useEffect(() => {
    if (topic) {
      getArticles({ requestedCategory: topic, sort_by }).then((result) => {
        setArticles(result);
      });
    } else {
      getArticles({ sort_by }).then((result) => {
        setArticles(result);
      });
    }
  }, [topic, sort_by]);

  return (
    <div>
      <h2>
        {topic
          ? `Recent articles about ${
              topic.charAt(0).toUpperCase() + topic.slice(1)
            }`
          : "All Articles"}
      </h2>
      <SortArticlesBy changeChoice={handleState} />
      <div className="article-preview-small-grid">
        {articles.map((article) => (
          <div key={article.article_id}>
            <ArticlePreviewCardSmall article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
