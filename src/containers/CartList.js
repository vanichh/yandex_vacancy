import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartMin from '../components/CartMin';
import Animation_loading from '../components/Animation_loading.js';
import No_results from '../components/No_results.js';
import Error from '../components/No_results.js';
import { distribution, selectlist } from '../store/card';
import CartInfo from '../containers/CartInfo.js';
export default function CartList() {
  const dispatch = useDispatch(),
    [result, setResult] = useState(''),
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
    serhInput.addEventListener('keyup', debounce(render, 1000));
    form.addEventListener('submit', render);
    function render(event) {
      setResult(Animation_loading);
      event.preventDefault();
      let search = document.querySelector('.search__input').value;
      fetch(`https://openlibrary.org/search.json?q=${search}`)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response.numFound > 0) {
            setResult('');
            dispatch(distribution(response.docs));
          } else {
            setResult(No_results);
            dispatch(distribution([]));
          }
        })
        .catch(() => {
          setResult(Error);
        });
    }
  }, [dispatch, form, listofCart, serhInput]);
  return (
    <>
      {result}
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
