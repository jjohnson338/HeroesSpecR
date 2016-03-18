global.Promise = require("bluebird");
import React from "react";
import ReactDOM from "react-dom";
//Components
const Layout = require('./components/Layout');
const mountNode = document.getElementById('app');



ReactDOM.render(
  <Layout />,
  mountNode
);
