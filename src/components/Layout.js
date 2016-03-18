import React from "react";
const HeroList = require('./HeroList');
const Layout = React.createClass({
  render: function() {
    return (
    <div>
      <HeroList source="http://heroesjson.com/heroes.json" />
      <div id="content"></div>
    </div>
    );
  }
});

module.exports = Layout;
