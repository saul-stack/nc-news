import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-server-be.onrender.com/api",
});

export const getArticles = (params) => {
  console.log("got these params", params);
  let path = "/articles";
  if (params) {
    const { requestedCategory, sort_by } = params;

    if (requestedCategory) {
      path = path.concat(`?topic=${requestedCategory}`);
      console.log(path);
    }

    if (sort_by) {
      path = path.concat(`?sort_by=${sort_by}`);
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
