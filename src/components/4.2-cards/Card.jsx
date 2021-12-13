import "./Card.css";
import faker from "faker";

function Card(props) {
  let randomImgUrl = faker.image.nature();
  return (
    <div className="cardDiv">
      <h1>{props.cardName}</h1>

      <img src={randomImgUrl + "?" + props.randNum} alt="" />
      <p>Image taken from: {faker.address.country()}</p>
      <p>
        <a className="link" href="./">
          SHARE
        </a>
        <a className="link" href="./">
          EXPLORE
        </a>
      </p>
    </div>
  );
}

export default Card;
