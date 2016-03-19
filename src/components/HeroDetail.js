import React from "react";
const TalentRow = require('./HeroDetail/TalentRow');
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
            {Object.keys(talents).map((key)=>{
              return <div>
                       <h3>Level {key}:</h3>
                       <TalentRow talents={talents[key]} />
                     </div>
              })
            }
          </span>
        </div>
      );
    }
  }
});

module.exports = HeroDetail;
