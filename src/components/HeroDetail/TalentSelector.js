import React from "react";

const handleClick = (e) => {
  var recursiveParentDivLookup = function(child){
    if(child.tagName === "DIV" && child.className === "option")
      return child;
    else{
      return recursiveParentDivLookup(child.parentNode);
    }
  };

  var element = recursiveParentDivLookup(e.target);

  var siblings = element.parentNode.children;
  //Find index of selected item and how many we're visible
  var index = -1;
  var visibleCount = 0;
  Array.prototype.forEach.call(siblings, function(a, ind) {
    if (a === element)
      index = ind;
    if (a.style.display === "block")
      visibleCount++;
  });

  Array.prototype.forEach.call(siblings, function(b, ind) {
    if (visibleCount === 1) {
      b.style.display = "block";
    } else if (b !== element) {
      b.style.display = "none";
    }
  });
};

const TalentSelector = React.createClass({
  componentDidMount: function(){
    //This will run alot. not right...
    var selects = document.getElementsByClassName('select');
    Array.prototype.forEach.call(selects, function(a) {
      Array.prototype.forEach.call(a.children, function(b, index) {
        if (index === 0)
          b.style.display = "block";

        b.addEventListener("click", handleClick);

      });
    });
  },
  render: function() {
    return (
      <div className="select">
          {
            this.props.talents.map((talent) =>{
              return <div className="option">
                        <h4 className='talentname'>{talent.name}</h4>
                        <p className='talentdesc'>{talent.description}</p>
                    </div>
            })
          }
      </div>
    );
  }
});

module.exports = TalentSelector;
