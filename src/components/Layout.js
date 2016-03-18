import React from "react";
const getHeroesData = require('../getHeroesData')('http://heroesjson.com/heroes.json');
const HeroList = require('./HeroList');
const HeroDetail = require('./HeroDetail');

const Layout = React.createClass({
  getInitialState: function() {
    return {
      selectedHero: null,
      heroes: []
    };
  },

  componentDidMount: function(){
    getHeroesData
      .then(data => {
        this.setState({ heroes: data });
        //onsole.log(this.state.heroes);
      })
      .catch(e => {
        console.log(e);
        console.log(e.message);
        console.log(e.stack);
      });
  },

  changeSelectedHero: function(heroname){
    console.log(heroname);
    const hero = this.state.heroes.filter(x => {
      return x.name === heroname;
    })[0];
    this.setState({selectedHero : hero});
  },

  render: function() {
    return (
    <div>
      <HeroList heroes={this.state.heroes} changeSelectedHero={this.changeSelectedHero} />
      <HeroDetail selectedHero={this.state.selectedHero} />
    </div>
    );
  }
});

module.exports = Layout;
