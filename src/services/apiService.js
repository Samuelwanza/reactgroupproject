import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const getRequest = async (url) => axios.get(BASE_URL + url).then((res) => res.data);

const postRequest = async (url, data) => axios.post(BASE_URL + url, data).then((res) => res.data);

const deleteRequest = async (url) => axios.delete(BASE_URL + url).then((res) => res.data);

export {
  getRequest,
  postRequest,
  deleteRequest,
};
