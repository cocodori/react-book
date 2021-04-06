import React from "react";
import { Route } from "react-router";
import NewsPages from "./pages/NewsPages";

const App = () => {
  return <Route path="/:category?" component={NewsPages} />;
};

export default App;
