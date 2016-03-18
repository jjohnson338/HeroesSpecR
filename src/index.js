global.Promise = require("bluebird");
const getHeroesData = require('./getHeroesData');
import React from "react";
import ReactDOM from "react-dom";
//getHeroesData('http://heroesjson.com/heroes.json')
//  .then((values)=>{
//    const novaTitle = values.filter((obj) => {
//      return obj.name == "Nova";
//    })[0].title;
//    //Set the element's value
//    document.getElementById('app').innerHTML = '<p>'+ novaTitle + '</p>';
//  })
//  //.then(data => console.log(data))
//  .catch(e => {
//    console.log(e);
//    console.log(e.message);
//    console.log(e.stack);
//  });

const mountNode = document.getElementById('app');

const HeroesReact = React.createClass({
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
      <ul id="heroes">
        {
          this.state.heroes.map(hero =>{
            return <li key={hero.name}>{hero.name}</li>
          })
        }
      </ul>
    );
  }
});

ReactDOM.render(
  <HeroesReact source="http://heroesjson.com/heroes.json" />,
  mountNode
);
