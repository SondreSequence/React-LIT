export const fetchData = (url) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error });
      });
  };
};
