import React from 'react';
import MaterialTable from 'material-table';

const Table = ({ options, ...props }) =>
  <MaterialTable
    options={{
      search: false,
      actionsColumnIndex: -1,
      paging: false,
      ...options
    }}
    {...props}
  />

Table.defaultProps = {
  options: {}
}

export default Table;
