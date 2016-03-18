import React from "react";
const HeroList = React.createClass({
  render: function() {
    return (
      <div id="sidemenu">
        <ul>
          {
            this.props.heroes.map(hero =>{
              return <li key={hero.name}>
                        <a onClick={this.props.changeSelectedHero.bind(null, hero.name)}>{hero.name}</a>
                     </li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = HeroList;
