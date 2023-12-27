import ReactDOM from 'react-dom/client';
import './index.scss';
import { RoutesApp } from './Routes';
import { StrictMode } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

const messagesInRu = {
    myMesage: "My message",
  };

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <IntlProvider messages={messagesInRu} locale={'ru'} defaultLocale={'en'}>
      <Router>
        <RoutesApp />
      </Router>
    </IntlProvider>
  </StrictMode>
);
