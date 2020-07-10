import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import config from "react-global-configuration";
import globalConfig from "./config";

config.set(globalConfig);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
