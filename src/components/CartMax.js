import React from 'react';
import { useDispatch } from 'react-redux';
import { infoDelete } from '../store/card';
import img_error from './img/img_error.png';
import './css/CartMax_style.css';
export default function CartMax(props) {
  const CartInfo = React.createRef();
  //document.body.style.overflow = 'hidden';
  const dispatch = useDispatch();
  let img = `http://covers.openlibrary.org/b/id/${props.img}-L.jpg`;
  let style = {
    width: '15px',
    height: '15px',
    paddingRight: '5px',
  };
  const scroll = function (event) {
    const elementary = event.changedTouches[0].clientY;
    CartInfo.current.style.top = -Math.round(elementary) + 'px';
    console.log(event);
    console.log(CartInfo.current.offsetHeight);
  };

  if (!props.img) img = img_error;
  function closed() {
    document.body.style.overflow = 'auto';
    dispatch(infoDelete());
  }
  return (
    <div className='Modal'>
      <div className='Cart-info' ref={CartInfo} onScroll={scroll}>
        <div className='Cart-info__close' onClick={closed}>
          &#10006;
        </div>
        <img className='Cart-info__img' src={img} alt={props.title} />
        <div className='Cart-info__list'>
          <h3 className='Cart-info__heading'>{props.title}</h3>
          <hr className='Cart-info__band' />
          <p>
            <svg style={style} viewBox='0 0 20 20'>
              <path
                fill='currentColor'
                d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
              />
            </svg>
            Автор
          </p>
          <p>{props.author}</p>
          <p>
            <svg style={style} viewBox='0 0 25 20'>
              <path
                fill='currentColor'
                d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z'
              />
            </svg>
            Дата издания
          </p>
          <p>{props.date}</p>
          <p>
            <svg style={style} viewBox='0 0 22 20'>
              <path
                fill='currentColor'
                d='M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z'
              />
            </svg>
            Издатель
          </p>
          <p>{props.publisher}</p>
          <p>
            <svg style={style} viewBox='0 0 20 20'>
              <path
                fill='currentColor'
                d='M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z'
              />
            </svg>
            ISBN
          </p>
          <p>{props.isbn}</p>
        </div>
      </div>
    </div>
  );
}
