import React from "react";
const TalentRow = React.createClass({
  render: function() {
    return (
      <table>
        <tr>
          {
            this.props.talents.map(talent =>{
              return <td key={talent.name}>
                      <a>
                        <h4 class='talentname'>{talent.name}</h4>
                        <p class='talentdesc'>{talent.description}</p>
                      </a>
                    </td>
            })
          }
        </tr>
      </table>
    );
  }
});

module.exports = TalentRow;
