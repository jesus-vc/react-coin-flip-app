import FlipButton from "./FlipButton";
import ImageResult from "./ImageResult";
import FlipStats from "./FlipStats";

import { useState } from "react";
import coinImages from "./coinImages";
import "./Coin.css";

function Coin() {
  const [coinState, setCoinState] = useState({
    coinFlipCounter: 0,
    headsCounter: 0,
    tailsCounter: 0,
    imgSrc: null,
    imgAlt: null,
  });

  const getRandomIndex = () =>
    Math.floor(Math.random() * Object.keys(coinImages).length);

  const updateCounters = (prevState, result) => ({
    ...prevState,
    coinFlipCounter: prevState.coinFlipCounter + 1,
    [result + "Counter"]: prevState[result + "Counter"] + 1,
    imgSrc: coinImages[result],
    imgAlt: result,
  });

  const flipCoin = () => {
    setCoinState((prevState) => {
      const randomIndex = getRandomIndex();
      const result = randomIndex === 1 ? "tails" : "heads";
      return updateCounters(prevState, result);
    });
  };

  return (
    <div className="Coin-container">
      <FlipButton onClick={flipCoin} />

      {coinState.coinFlipCounter === 0 ? null : (
        <ImageResult imgSrc={coinState.imgSrc} imgAlt={coinState.imgAlt} />
      )}

      <FlipStats
        coinFlipCounter={coinState.coinFlipCounter}
        headsCounter={coinState.headsCounter}
        tailsCounter={coinState.tailsCounter}
      />
    </div>
  );
}

export default Coin;
