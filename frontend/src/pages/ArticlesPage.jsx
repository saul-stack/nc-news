import { useContext, useEffect, useState } from "react";

import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import Loading from "../components/Loading";
import { MyContext } from "../App";
import SortArticlesBy from "../components/SortArticlesBar";
import { getArticles } from "../../api";
import { useParams } from "react-router";

export default function Articles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState(null);
  const [sort_by, setSort_by] = useState("created_at");
  const { isLoading, setIsLoading } = useContext(MyContext);

  function handleState(sort_by) {
    setSort_by(sort_by);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic ? { requestedCategory: topic, sort_by } : { sort_by })
      .then((result) => {
        setArticles(result || []);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sort_by]);

  if (isLoading || articles === null) return <Loading />;

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
