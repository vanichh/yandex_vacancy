import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartMin from '../components/CartMin';
import { distribution, selectlist } from '../store/card';
import CartInfo from '../containers/CartInfo.js';
export default function CartList() {
  const dispatch = useDispatch(),
    listofCart = useSelector(selectlist),
    form = document.querySelector('form'),
    serhInput = document.querySelector('.search__input'),
    debounce = (fn, ms) => {
      let timeout;
      return function () {
        const fnCall = () => {
          fn.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
      };
    };
  useEffect(() => {
    serhInput.addEventListener('keyup', debounce(render,1000));
    form.addEventListener('submit', render);
    function render(event) {
      event.preventDefault();
      let search = document.querySelector('.search__input').value;
      fetch(`http://openlibrary.org/search.json?q=${search}`)
        .then(response => response.json())
        .then(response => {
          dispatch(distribution(response.docs));
        });
    }
  }, [dispatch, form, listofCart, serhInput]);
  return (
    <>
      <CartInfo />
      {listofCart.map(elem => {
        return (
          <CartMin
            img={elem.img}
            title={elem.title}
            author={elem.author}
            key={elem.key}
            keyBook={elem.key}
          />
        );
      })}
    </>
  );
}
