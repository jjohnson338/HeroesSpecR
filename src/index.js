global.Promise = require("bluebird");
import React from "react";
import ReactDOM from "react-dom";
//Components
const HeroList = require('./components/HeroList');

const mountNode = document.getElementById('app');



ReactDOM.render(
  <HeroList source="http://heroesjson.com/heroes.json" />,
  mountNode
);
