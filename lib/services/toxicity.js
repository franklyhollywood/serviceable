const toxicity = require('@tensorflow-models/toxicity');

// The minimum prediction confidence.
const threshold = 0.9;
let model = null;

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
async function isToxic(message) {
  if(model === null) {
    model = await toxicity.load(threshold);
  }
  const predictions = await model.classify(message);

  const toxicityPred = predictions.filter(pred => pred.label === 'toxicity')[0];
  
  return toxicityPred.results[0].match;
}

module.exports = isToxic;
