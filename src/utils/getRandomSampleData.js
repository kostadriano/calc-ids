import { generateNewSample } from '../models/sample';

const getSpecies = () => ["A", "B", "C"][Math.floor(Math.random() * 3)]
const getSize = () => Math.floor(Math.random() * 10);
const getSex = () => ["F", "M"][Math.floor(Math.random() * 2)];

const getRandomSamples = () => Array.apply(null, Array(35)).map(e =>
  generateNewSample({
    speciesName: getSpecies(),
    sex: getSex(),
    size: getSize(),
  })
);

export default getRandomSamples;
