import { createContext, useContext, useEffect, useReducer } from "react";
import React from "react";
import reducer from "./reducer";
import data from "./api/data.json";

const AppContext = createContext();

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Web Developer",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "anurag",
        image: "./images/about1.svg",
      },
    });
  };

  const getServices = (data) => {
    dispatch({
      type: "GET_SERVICES",
      payload: data,
    });
  };

  useEffect(() => {
    getServices(data);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, GlobalContext };
