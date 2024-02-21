import React from 'react';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { FileDownload } from '@mui/icons-material';

import Filters from '@components/Filters';
import { useFilters } from '@hooks/useFilters';

import { TABLE_CONFIG } from './tableConfig';
import './styles.scss';
import { INVOICE_TASKS } from './dummyData';

const rootClassName = 'task-allocation-invoice';

const Invoice: React.FC = () => {
  const {
    records: invoices,
    filterMonth,
    filterYear,
    handleFilterYearChange,
    handleFilterMonthChange,
    clearFilters
  } = useFilters(INVOICE_TASKS);

  return (
    <div className={rootClassName}>
      <h3>Invoice</h3>
      <Filters
        month={filterMonth}
        year={filterYear}
        handleMonthChange={handleFilterMonthChange}
        handleYearChange={handleFilterYearChange}
        clearFilters={clearFilters}
      />
      <Box sx={{ p: 3 }}>
        <TableContainer component={Paper} variant='outlined'>
          <Table size='small'>
            <TableHead>
              <TableRow>
                {TABLE_CONFIG.map(({ colName, id }) => (
                  <TableCell key={id}>
                    <h4>{colName}</h4>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((task) => {
                return (
                  <TableRow>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>
                      {task.month} {task.year}
                    </TableCell>
                    <TableCell>{task.amount} €</TableCell>
                    <TableCell>
                      <FileDownload />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <div className={`${rootClassName}__amount`}>
        <span className={`${rootClassName}__amountLabel`}>Amount Earned:</span>
        1000 €
      </div>
    </div>
  );
};

export default Invoice;
