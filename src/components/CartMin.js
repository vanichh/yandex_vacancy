import React from 'react';
import './css/CartMin_style.css';
import img_error from './img/img_error.png';

export default function CartMin(props) {
  let img = `http://covers.openlibrary.org/b/id/${props.img}-M.jpg`;
  if (!props.img) img = img_error;
  
  return (
    <div className='Cart' keybook={props.keyBook}>
      <h4 className='Cart__header'>{props.title}</h4>
      <p className='Card__autor'>{props.author}</p>
      <img className='Card__img' src={img} alt={props.title} />
    </div>
  );
}
