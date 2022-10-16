import { FETCH_POST } from "../actionTypes";
import axios from "axios";

const baseUrl = "http://localhost:3000/article";

export function fetchPost(limit, offset) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/${limit}/${offset}`)
        .then((resp) => {
          dispatch(fetchPostAction(resp.data.rows));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function editPost(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${baseUrl}/${id}`, payload)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function fetchPostAction(payload) {
  return {
    type: FETCH_POST,
    payload,
  };
}
