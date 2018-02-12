import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

//provider is Reacts hook into our Redux store.
//We have to wrap app. If we are also using HashRouter, then you would wrap that with provider as well. Provider should be the top most wrapping.

import "./index.css";
import store from './store';

import App from "./App";

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById( 'root' ));
