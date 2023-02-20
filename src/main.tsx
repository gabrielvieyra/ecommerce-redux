import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// Components
import TestApp from './pages/TestApp';
import CounterApp from './pages/CounterApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> */}
    {/* <TestApp title='Hola, Soy Vegeta' subTitle='No hay subtitulo' name='Gabriel Vieyra' /> */}
    <CounterApp value={20} />
  </React.StrictMode>
);
