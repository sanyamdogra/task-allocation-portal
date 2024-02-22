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
import EmptyState from '@components/EmptyState';
import { useFilters } from '@hooks/useFilters';

import { TABLE_CONFIG } from './tableConfig';
import { INVOICE_TASKS } from './dummyData';

import './styles.scss';

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

  if (invoices.length === 0) {
    return (
      <EmptyState info='No invoices available!' testId='invoices-empty-state' />
    );
  }

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
                  <TableRow key={task.id} data-testid='invoice-table-row'>
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
      <div
        className={`${rootClassName}__amount`}
        data-testid='invoice-total-amount'
      >
        <span className={`${rootClassName}__amountLabel`}>Amount Earned:</span>
        1000 €
      </div>
    </div>
  );
};

export default Invoice;
