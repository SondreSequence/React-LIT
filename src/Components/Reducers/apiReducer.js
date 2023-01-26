const initialState = {
  data: ["Data"],
  loading: false,
  error: null,
};
export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CLEAR_DATA":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
}
