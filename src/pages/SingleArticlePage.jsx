import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import CommentsSection from "../components/CommentsSection";
import Loading from "../components/Loading";
import { useContext } from "react";
import { MyContext } from "../App";

//need to have a user profile object which contains an array of all the articles they have voted on, so they can only vote on each article once

export default function SingleArticlePage() {
  const { isLoading, setIsLoading } = useContext(MyContext);

  const [article, setArticle] = useState([]);
  const requestedArticleId = useParams().article_id;

  useEffect(() => {
    setIsLoading(true);

    getArticleById(requestedArticleId).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading === true && <Loading />}
      {console.log(isLoading)}
      {isLoading != true && <ArticleCard article={article} />}

      {isLoading != true && <CommentsSection article={article} />}
    </div>
  );
}
