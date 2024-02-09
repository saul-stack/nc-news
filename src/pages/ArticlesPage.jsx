import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticlePreviewCardSmall from "../components/ArticlePreviewCardSmall";
import SortArticlesBy from "../components/SortArticlesBar";
import { useParams } from "react-router";
import { useContext } from "react";
import { MyContext } from "../App";
import Loading from "../components/Loading";

export default function Articles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sort_by, setSort_by] = useState("created_at");
  const { isLoading, setIsLoading } = useContext(MyContext);

  function handleState(sort_by) {
    setSort_by(sort_by);
  }

  useEffect(() => {
    setIsLoading(true);
    if (topic) {
      getArticles({ requestedCategory: topic, sort_by }).then((result) => {
        setArticles(result);
      });
    } else {
      getArticles({ sort_by }).then((result) => {
        setArticles(result);
        setIsLoading(false);
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
      {isLoading === true && <Loading />}

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
