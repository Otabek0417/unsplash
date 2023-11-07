import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();
// !
const changeState = (state, action) => {
  switch (action.type) {
    case "SET_LIKED_IMAGE":
      return { ...state, likeImages: [...state.likeImages, action.payload] };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "ADD_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const dataFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("unsplashData")) || {
      mode: "light",
      likeImages: [],
      user: null,
    }
  );
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

  console.log(state);

  const addNewImage = (newImage) => {
    const isImage = state.likeImages.every((image) => {
      return image.id !== newImage.id;
    });

    if (isImage) {
      dispatch({ type: "SET_LIKED_IMAGE", payload: newImage });
    }
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: addUser });
  };

  useEffect(() => {
    localStorage.setItem("unsplashData", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (state.mode === "light") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [state.mode]);
  return (
    <GlobalContext.Provider value={{ ...state, addNewImage, changeMode, addUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
