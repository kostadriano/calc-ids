const calculate = samples => {
  const groupedSpecies = Utils.groupBy(samples, 'speciesName');

  const species = normalizeSpeciesData(groupedSpecies);

  return species;
}

const normalizeSpeciesData = species =>
  Object.keys(species).reduce((speciesObject, currentSpecies) => {
    const samples = species[currentSpecies];

    const { males, females } = getMalesAndFemales(samples);
    const { malesAverage, femalesAverage } = getSexAverage({ males, females });

    const SDI = getLovichGibbonsIndex({ malesAverage, femalesAverage })

    speciesObject[currentSpecies] = {
      samples,
      males,
      females,
      malesAverage,
      femalesAverage,
      SDI
    }

    return speciesObject;
  }, {})

const getSexAverage = ({ males, females }) => ({
  malesAverage: getAverage(males),
  femalesAverage: getAverage(females)
})

const getMalesAndFemales = species => ({
  males: Utils.filterBy(species, 'sex', 'M'),
  females: Utils.filterBy(species, 'sex', 'F')
})

const getAverage = array =>
  array.reduce((a, b) => (a + Number(b.size || 0)), 0) / array.length;

const getLovichGibbonsIndex = ({ malesAverage, femalesAverage }) =>
  malesAverage > femalesAverage
    ? (((malesAverage / femalesAverage) - 1) * -1)
    : ((femalesAverage / malesAverage) - 1)

const Utils = {
  groupBy: (array, attribute) =>
    array.reduce((groups, item) => {
      const currentElements = groups[item[attribute]] || []

      groups[item[attribute]] = [...currentElements, item]

      return groups
    }, {}),
  filterBy: (array, attribute, value) =>
    array.filter(element => element[attribute] === value)
}


export default calculate;
