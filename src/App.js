import "./App.css";

import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext/AuthContext";

import Navigation from "./Navigation/Navigation";
const App = () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

export default App;
