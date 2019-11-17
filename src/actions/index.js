import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  
  await dispatch(fetchPosts());
 const userIds = _.uniq(_.map(getState().posts, 'userId'));
userIds.forEach(id=>dispatch(fetchUser(id)))
}


export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response
    });
  };
};

/*
export const fetchUserMemoized = id => {
  return dispatch => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response
  });
});
*/

export const fetchUser = id => {
  return async dispatch => { 
  const response = await jsonPlaceholder(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response
  });
}}