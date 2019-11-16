import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response
    });
  };
};
