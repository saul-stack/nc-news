import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, Router, Link, useLocation } from "react-router-dom";
import AllArticles from "./pages/AllArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import CurrentUserAvatarCard from "./components/CurrentUserAvatarCard";
function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <CurrentUserAvatarCard />
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
