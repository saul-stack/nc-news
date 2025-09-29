import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ncNewsApi = axios.create({
  baseURL: API_BASE_URL,
});

export const getArticles = (params) => {
  let path = "/articles";
  const numberOfQueries = Object.keys(params).length;
  if (params) {
    const { requestedCategory, sort_by } = params;

    path = path.concat("?");

    if (requestedCategory) {
      path = path.concat(`topic=${requestedCategory}`);
    }

    if (sort_by) {
      if (numberOfQueries > 1) path = path.concat("&");
      path = path.concat(`sort_by=${sort_by}`);
    }
  }

  return ncNewsApi.get(path).then(({ data }) => {
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
  return ncNewsApi
    .post(`/articles/${articleId}/comments`, {
      userName: userName,
      body: body,
    })
    .then((result) => {
      return result.data.comment.comment_id;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const deleteCommentById = (comment_id) => {
  ncNewsApi.delete(`/comments/${comment_id}`);
};
