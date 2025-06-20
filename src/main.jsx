import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// order
import './index.css';

import { store } from './store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
