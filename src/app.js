const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select-view.js');
const InstrumentView = require('./views/instrument-view.js');

document.addEventListener('DOMContentLoaded', () => {


  const selectInfoSection = document.querySelector('div#instrument-info')
  const instrumentView = new InstrumentView(selectInfoSection);
  instrumentView.bindEvents();

  const selectSection = document.querySelector('select#instrument-families');
  const selectView = new SelectView(selectSection);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

});
