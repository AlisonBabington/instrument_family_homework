const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (section) {
  this.section = section;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instrument-families:all-instruments', (event) => {
    const allFamilies = event.detail;
    this.populateTable(allFamilies);
  });
  this.section.addEventListener('change', (event) => {
    const selectFamily = event.target.value;
    PubSub.publish('SelectView:instrument-change', selectFamily);
  });
};

SelectView.prototype.populateTable = function (data) {
  data.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name ;
    option.value = index;
    this.section.appendChild(option);
  })
};

module.exports = SelectView;
