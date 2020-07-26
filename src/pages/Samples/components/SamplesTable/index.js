import React from 'react';

import Table from '../../../../components/Table';
import { samplesTableColumns } from '../../../../models/sample';

const SamplesTable = ({ samples, onSampleAdd, onSampleDelete, onSampleUpdate }) =>
  <Table
    title="Amostras"
    data={samples}
    columns={samplesTableColumns}
    editable={{
      onRowAdd: newSample =>
        new Promise((resolve) => {
          onSampleAdd(newSample);

          resolve();
        }),
      onRowUpdate: updatedSample =>
        new Promise((resolve) => {
          onSampleUpdate(updatedSample);

          resolve();
        }),
      onRowDelete: deletedSample =>
        new Promise(resolve => {
          onSampleDelete(deletedSample)

          resolve();
        })
    }}
    options={{
      addRowPosition: 'first',
      maxBodyHeight: '250px',
      rowStyle: {
        fontSize: '14px'
      }
    }}
  />

export default SamplesTable;
