import React, { useState } from "react";
import { submitVote } from "../../../api";
export default function ArticleVoteButton({ article }) {
  const { votes, article_id } = article;

  //need to make it so that user can only vote once per article.
  //pass currentUser in as context, with a property:
  // voted articles: []
  //this array will contain the article id of each article that has been voted on
  // use this to allow or disallow a vote on the Comment
  // then update this cotext when the vote is submitted or retracted

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
