import React from 'react';
import SamplesTable from './components/SamplesTable';
import { generateNewSample } from '../../models/sample';

const Samples = () => {
  const [samples, setSamples] = React.useState([]);

  const handleSampleAdd = (sample) => {
    const newSample = generateNewSample(sample)

    setSamples([...samples, newSample])
  }

  const handleSampleUpdate = (updatedSample) => {
    const updatedSamples = samples.map(sample =>
      sample.id === updatedSample.id
        ? {
          ...sample,
          ...updatedSample
        }
        : sample
    )

    setSamples(updatedSamples)
  }

  const handleDeleteSample = (deletedSample) => {
    const updatedSamples = samples.filter(sample =>
      sample.id !== deletedSample.id
    )

    setSamples(updatedSamples)
  }

  return (
    <SamplesTable
      samples={samples}
      onSampleAdd={handleSampleAdd}
      onSampleDelete={handleDeleteSample}
      onSampleUpdate={handleSampleUpdate}
    />
  )
}

export default Samples;
