import * as api from '../api/index.js';
import { FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};