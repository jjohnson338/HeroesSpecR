import React from "react";
const TalentSelector = require('./HeroDetail/TalentSelector');
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
      const talents = this.props.selectedHero.talents;
      return (
        <div id="content">
          <span>
            <h1 id="name">{this.props.selectedHero.name}</h1>
            <h2 id="title"> - {this.props.selectedHero.title}</h2>
          </span>
            {Object.keys(talents).map((key, index)=>{
              return (
                 <div>
                   <h3>Level {key}:</h3>
                   <TalentSelector talents={talents[key]} />
                 </div>
               )
              })
            }
        </div>
      );
    }
  }
});

module.exports = HeroDetail;
