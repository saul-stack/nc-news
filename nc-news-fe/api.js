import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-server-be.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const submitVote = (articleId, numberOfVotes) => {
  ncNewsApi.patch(`/articles/${articleId}`, { inc_votes: numberOfVotes });
};
