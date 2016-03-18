import React from "react";
const HeroDetail = React.createClass({
  render: function() {
    if(this.props.selectedHero != null)
      console.log(this.props.selectedHero.name);
    if(this.props.selectedHero == null){
      return (
        <div id="content"></div>
      );
    }
    else{
      return (
        <div id="content">
          <h1>{this.props.selectedHero.name}</h1>
          <h2>{this.props.selectedHero.title}</h2>
        </div>
      );
    }
  }
});

module.exports = HeroDetail;
