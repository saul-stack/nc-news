import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import CommentsSection from "../components/CommentsSection";

//need to have a user profile object which contains an array of all the articles they have voted on, so they can only vote on each article once

export default function SingleArticlePage() {
  const [article, setArticle] = useState([]);
  const requestedArticleId = useParams().article_id;

  useEffect(() => {
    getArticleById(requestedArticleId).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <div>
      <ArticleCard article={article} />
      <CommentsSection article={article} />
    </div>
  );
}
