import React, { useState, useEffect } from "react";
import { submitVote } from "../../api";

export default function ArticleVoteButton({ article }) {
  const { votes, article_id } = article;

  if (votes != undefined) {
    const [Votes, setVotes] = useState(votes);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
      let votesIncrement = 0;
      if (isClicked) {
        setVotes(Votes - 1);
        votesIncrement = -1;
      } else {
        setVotes(votes + 1);
        votesIncrement = 1;
      }
      submitVote(article_id, votesIncrement);
      setIsClicked(!isClicked);
    };
    return (
      <button className={`like-button-${isClicked}`} onClick={handleClick}>
        <span className="likes-counter">{`Vote | ${Votes}`}</span>
      </button>
    );
  }
}
