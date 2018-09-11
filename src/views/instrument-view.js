const PubSub = require('../helpers/pub_sub.js');

const InstrumentView = function (section) {
  this.section = section
};

InstrumentView.prototype.bindEvents = function () {
  PubSub.subscribe('Instrument-families:selected-family', (event) => {
    const instrumentFam = event.detail;
    this.render(instrumentFam)
  });
};

InstrumentView.prototype.render = function (selected) {
  this.section.innerHTML = "";

  const familyName = document.createElement('h1')
  this.addElement(familyName, selected.name);

  const familyTypes = document.createElement('h3');
  familyTypes.textContent = `Examples of the ${selected.name} family:`
  this.section.appendChild(familyTypes);

  const familyInstruments = selected.instruments.forEach( (instrument) => {
    const list = document.createElement('li');
    this.addElement(list, instrument)
  });

  const familyDesc = document.createElement('p');
  this.addElement(familyDesc, selected.description);
};

InstrumentView.prototype.addElement = function (addsection, element) {
   addsection.textContent = element;
   this.section.appendChild(addsection);
};

// name: 'Percussion',
// description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',
// instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']
// },
module.exports = InstrumentView;
