import axios from "axios";

const ADDR = "http://13.124.188.218";

export const instance = axios.create({
  baseURL: ADDR,
  headers: localStorage.getItem("token")
    ? {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    : {},
});

export const axiosUser = {
  login: (users) => instance.post(`/users/login`, users),
  register: (users) => instance.post(`/users/signup`, users),
};

export const axiosPost = {
  getPost: () => instance.get(`/api/posts`),
  getPostById: (id) => instance.get(`/api/posts/detail/${id}`),
  getPostListByCategory: (category) => instance.get(`/api/posts/${category}`),
  addPost: (data) => instance.post(`/api/posts/write`, data),
  modifyPost: (id, data) => instance.put(`/api/posts/update/${id}`, data),
  deletePost: (id) => instance.delete(`/api/posts/delete/${id}`),
  likePost: (postId, likeStatus) =>
    instance.post(`/api/like/${postId}`, { action: likeStatus }),
};

export const axiosComment = {
  getCommentListByPostId: (postId) => instance.get(`/api/comments/${postId}`),
  addComment: (postId, content) =>
    instance.post(`/api/comments/write`, { postId, content }),
};
