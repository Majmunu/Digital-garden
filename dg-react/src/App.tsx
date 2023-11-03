import React from "react";
import { useRoutes } from "react-router-dom";
import route from "./router";

function App() {
  //根据路由表生成对应路由
  const element = useRoutes(route);
  return <div>{element}</div>;
}

export default App;
