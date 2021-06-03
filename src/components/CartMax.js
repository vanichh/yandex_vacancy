import React from 'react';
import { useDispatch } from 'react-redux';
import { infoDelete } from '../store/card';
import img_error from './img/img_error.png';
import './css/CartMax_style.css';
export default function CartMax(props) {
  let img = `http://covers.openlibrary.org/b/id/${props.img}.jpg`;
  if (!props.img) img = img_error;
  const dispatch = useDispatch();
  function closed() {
    dispatch(infoDelete());
  }
  return (
    <div className='Cart-info'>
      <div className='Cart-info__close' onClick={closed}>
        &#10006;
      </div>
      <img className='Cart-info__img' src={img} alt={props.title} />
      <div className='Cart-info__list'>
        <h3 className='Cart-info__heading'>{props.title}</h3>
        <p>Автор</p>
        <p>{props.author}</p>
        <p>Дата пуликации</p>
        <p>{props.date}</p>
        <p>Издатель</p>
        <p>{props.publisher}</p>
        <p>ISBN</p>
        <p>{props.isbn}</p>
      </div>
    </div>
  );
}
