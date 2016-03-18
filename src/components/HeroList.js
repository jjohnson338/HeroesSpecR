import React from "react";
const getHeroesData = require('../getHeroesData');
const HeroList = React.createClass({
  getInitialState: function() {
    return {
      heroes: [{name: 'loading'}]
    };
  },

  componentDidMount: function() {
    getHeroesData(this.props.source)
      .then(data => this.setState({heroes : data}))
      .catch(e => {
        console.log(e);
        console.log(e.message);
        console.log(e.stack);
      });
  },

  render: function() {
    return (
      <div id="sidemenu">
        <ul>
          {
            this.state.heroes.map(hero =>{
              return <li key={hero.name}><a>{hero.name}</a></li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = HeroList;
