import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/articles">All Articles</Link>
    </div>
  );
}
