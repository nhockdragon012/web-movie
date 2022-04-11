import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from './components/Layout/layout';
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProviderContext from './components/providerContext'
require('helvatica-neue-lt/index.css');

ReactDOM.render(
  <React.StrictMode>
    <ProviderContext>
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    </ProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
