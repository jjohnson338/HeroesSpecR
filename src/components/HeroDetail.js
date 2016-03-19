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
          <span>
            <h1 id="name">{this.props.selectedHero.name}</h1>
            <h2 id="title"> - {this.props.selectedHero.title}</h2>          
          </span>
        </div>
      );
    }
  }
});

module.exports = HeroDetail;
