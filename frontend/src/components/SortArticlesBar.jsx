export default function SortArticlesBy({ changeChoice }) {
  const legalSortQueries = [
    "Newest",
    "Oldest",
    "Most Popular",
    "Least Popular",
    "Most Commented",
    "Least Commented",
  ];

  const handleChange = (event) => {
    let userString = event.target.value;
    let requestString;

    switch (userString) {
      case "Newest":
        requestString = "created_at";
        break;
      case "Oldest":
        requestString = "created_at&order=asc";
        break;
      case "Most Popular":
        requestString = "votes";
        break;
      case "Least Popular":
        requestString = "votes&order=asc";
        break;
      case "Most Commented":
        requestString = "comment_count";
        break;
      case "Least Commented":
        requestString = "comment_count&order=asc";
        break;
      default:
        requestString = "created_at";
    }
    changeChoice(requestString);
  };
  return (
    <div>
      <label>
        Sort by
        <select onChange={handleChange}>
          {legalSortQueries.map((query, index) => (
            <option key={index} value={query}>
              {query}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
