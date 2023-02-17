import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// Components
import TestApp from './pages/TestApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> */}
    <TestApp title='No hay titulo' subTitle='No hay subtitulo' name='Gabriel Vieyra' />
  </React.StrictMode>
);
