import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import {SearchContextProvider} from './context/SearchContext.js'
import {SearchContextTwoProvider} from './context/SearchContextTwo.js'
import {SearchContextThreeProvider} from './context/SearchContextThree.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider >
        <SearchContextTwoProvider>
          <SearchContextThreeProvider>
          <App />
          </SearchContextThreeProvider>
         
        </SearchContextTwoProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
