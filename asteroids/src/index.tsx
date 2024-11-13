import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AsteroidTable from './components/AsteroidTable/AsteroidTable';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AsteroidTable/>
  </React.StrictMode>
);

