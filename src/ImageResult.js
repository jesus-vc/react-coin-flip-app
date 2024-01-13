function ImageResult(props) {
  return (
    <img
      className="Coin-image"
      data-testid="coin-image"
      src={props.imgSrc}
      alt={props.imgAlt}
    />
  );
}

export default ImageResult;
