import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  // Anything received as a class name from outside of this file is added to the 'card ' string.

  return <div className={classes}>{props.children}</div>;
  // props.children are the children divs of props.className
}

export default Card;
