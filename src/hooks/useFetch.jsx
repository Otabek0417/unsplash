import React, { useEffect, useReducer } from "react";
const changeState = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ISPENDING":
      return { ...state, isPending: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return;
      state;
  }
};
function useFetch(url) {
  const [state, dispatch] = useReducer(changeState, {
    data: null,
    isPending: false,
    error: null,
  });
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: "SET_ISPENDING", payload: true });
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Xatolik yuz berdi :(");
        }
        const data = await request.json();
        dispatch({ type: "SET_DATA", payload: data });
        dispatch({ type: "SET_ERROR", payload: null });
        dispatch({ type: "SET_ISPENDING", payload: false });
      } catch (error) {
        dispatch({ type: "SET_ISPENDING", payload: false });
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    };
    getData();
  }, [url]);
  return { ...state };
}

export default useFetch;
