import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DialogsData = [
    {name:'Alex', id:'1'},
    {name:'Kazumi', id:'2'},
    {name:'Luka', id:'3'},
    {name:'Dimon', id:'4'},
    {name:'Sasha', id:'5'},
    {name:'Valera', id:'6'}
]

ReactDOM.render(
  <React.StrictMode>
    <App DialogsData={DialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();