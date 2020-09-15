import * as React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import makeData from './data/table';
import { Table } from '../src/components/table';
export default {
  title: 'Table',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(100), []);
  return <Table columns={columns} data={data} />;
};
