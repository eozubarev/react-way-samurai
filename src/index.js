import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    store={store}
                    dispatch={store.dispatch.bind(store)} 
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree)


