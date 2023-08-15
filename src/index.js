import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { initAuth } from './auth';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

function render(Component) {
  root.render(
    <React.StrictMode> 
        <BrowserRouter>
          <Provider store={store}>
                <Component></Component>
          </Provider>
        </BrowserRouter>
    </React.StrictMode>
  );
}


initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
