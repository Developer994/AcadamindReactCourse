import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  console.log(props);
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); // props.children is what is between the opening and closing Card tag inside AddUser.js
  //   props.className will use the className from AddUser, which is className={classes.input} (props.className === className.classes.input)
  //   classes.card is the card property inside of Card.module.css
};

export default Card;
