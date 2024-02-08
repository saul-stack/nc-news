import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-server-be.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticlesByCategory = (requestedTopic) => {
  return ncNewsApi.get(`/articles?topic=${requestedTopic}`).then(({ data }) => {
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

export const submitComment = (articleId, comment) => {
  const { userName, body } = comment;
  ncNewsApi
    .post(`/articles/${articleId}/comments`, {
      userName: userName,
      body: body,
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const deleteCommentById = (comment_id) => {
  ncNewsApi.delete(`/comments/${comment_id}`);
};
