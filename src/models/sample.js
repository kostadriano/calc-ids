import React from 'react';
import { Input } from '@material-ui/core';

const validations = {
  required: value => value != null && value !== '',
  min: (value, min) => Number(min) <= Number(value)
}

export const samplesTableColumns = [
  {
    title: "Nome da espécie",
    field: 'speciesName',
    validate: ({ speciesName }) => validations.required(speciesName)
  },
  {
    title: "Sexo",
    field: 'sex',
    lookup: { M: 'M', F: 'F' },
    validate: ({ sex }) => validations.required(sex)
  },
  {
    title: "Tamanho",
    field: 'size',
    initialEditValue: 0,
    validate: ({ size }) => validations.required(size) && validations.min(size, 0),
    editComponent: ({ value, onChange, error }) =>
      <Input
        required
        placeholder="Tamanho"
        min="0"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        error={error}
        type="number"
      />
  },
]

export const generateNewSample = sample => ({
  ...sample,
  id: new Date().getTime()
})
