function FlipStats(props) {
  return (
    <p>{`Out of ${props.coinFlipCounter} flips, there have been ${props.headsCounter} heads and ${props.tailsCounter} tails.`}</p>
  );
}

export default FlipStats;
