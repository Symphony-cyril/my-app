import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/storeOne";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Cat from "./components/cat";
import Icon from "./components/test";
import "@symphony-ui/uitoolkit-styles/dist/css/uitoolkit.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App />
      <Cat />*/}
      <Icon />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
