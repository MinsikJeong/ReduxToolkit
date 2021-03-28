// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateCount = () => {
  number.innerText = count;
}

const handleAdd = () => {
  console.log('add!');
  // count = count + 1;
  count ++;
  updateCount();
}
const handleMinus = () => {
  console.log('minus!');
  // count = count - 1;
  count --;
  updateCount();
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus)