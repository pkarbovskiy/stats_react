import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/tailwind.generated.css'
import Root from './routes';
import { createStore } from 'redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
