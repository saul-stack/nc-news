import "./App.css";
import LandingPage from "./LandingPage";
import { Routes, Route, Router, Link, useLocation } from "react-router-dom";
import AllArticles from "./AllArticles";
import ArticlePage from "./ArticlePage";
function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <div>{pathname != "/" ? <Link to="/">Home</Link> : null}</div>
      <h1>NC-News</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path={`/:topic/:article_id`} element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
