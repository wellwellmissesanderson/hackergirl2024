import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './app.css';

const root = document.getElementById('root')

createRoot(root).render(<App />)

// https://css-tricks.com/books/fundamental-css-tactics/infinite-scrolling-background-image