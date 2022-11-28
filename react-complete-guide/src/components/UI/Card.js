import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //anything we receive as a class name from outside is added to this string
  return <div className={classes}>{props.children}</div>; //props.children="wrapper"
}

export default Card;
