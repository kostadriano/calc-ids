import React from 'react';
import SamplesTable from './components/SamplesTable';
import { Button, Box } from '@material-ui/core';
import { generateNewSample } from '../../models/sample';
import getRandomSampleData from '../../utils/getRandomSampleData';

const Samples = () => {
  const [samples, setSamples] = React.useState([]);

  const generateRandomSamples = () => {
    setSamples(getRandomSampleData())
  }

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
    <>
      <Box textAlign="right" marginBottom={2}>
        <Button onClick={generateRandomSamples} variant="contained" color="primary">
          Gerar Amostras Aleatórias
        </Button>
      </Box>

      <SamplesTable
        samples={samples}
        onSampleAdd={handleSampleAdd}
        onSampleDelete={handleDeleteSample}
        onSampleUpdate={handleSampleUpdate}
      />
    </>
  )
}

export default Samples;
