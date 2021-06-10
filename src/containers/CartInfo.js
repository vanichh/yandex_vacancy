import React, { useEffect } from 'react';
import { selectlist, info, selectInfo } from '../store/card';
import { useSelector, useDispatch } from 'react-redux';
import CartMax from '../components/CartMax.js';
export default function CartInfo() {
  const listofCart = useSelector(selectlist),
    cartInfo = useSelector(selectInfo),
    dispatch = useDispatch();
  useEffect(() => {
    document.querySelector('#root').addEventListener('click', infoCartRender);
    function infoCartRender(event) {
      const attribute = event.path[1].getAttribute('keybook');
      dispatch(
        info(
          listofCart.filter(item => {
            
            return item.key === attribute;
          })
        )
      );
    }
  }, [dispatch, listofCart]);
  return (
    <>
      {cartInfo.map(elem => {
        return (
          <CartMax
            img={elem.img}
            title={elem.title}
            author={elem.author}
            isbn={elem.isbn}
            publisher={elem.publisher}
            date={elem.publish_date}
            key={elem.key}
          />
        );
      })}
    </>
  );
}
