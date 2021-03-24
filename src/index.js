import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import 'bootstrap/scss/bootstrap.scss';

const store = document.getElementById('store');

ReactDOM.render(<AppRouter />, store);
