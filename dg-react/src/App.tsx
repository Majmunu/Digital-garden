import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import route from "./router";
import LoadingPage from "./pages/Loading";
function App() {
  //根据路由表生成对应路由
  const element = useRoutes(route);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟首次加载完成后隐藏Loading组件
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <LoadingPage />
      {/*{loading ? <LoadingPage/> : element}*/}
    </div>
  );
}

export default App;
