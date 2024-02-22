import React from 'react';

import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import Filters from '@components/Filters';
import EmptyState from '@components/EmptyState';
import { useFilters } from '@hooks/useFilters';

import { HISTORIC_TASKS } from './dummyData';
import { TABLE_CONFIG } from './tableConfig';

import './styles.scss';

const rootClassName = 'task-allocation-history-page';

const History: React.FC = () => {
  const {
    records: historicTasks,
    filterMonth,
    filterYear,
    handleFilterYearChange,
    handleFilterMonthChange,
    clearFilters
  } = useFilters(HISTORIC_TASKS);

  if (historicTasks.length === 0) {
    return (
      <EmptyState
        info='No historic tasks available!'
        testId='history-empty-state'
      />
    );
  }

  return (
    <div className={rootClassName}>
      <h3>History</h3>
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
              {historicTasks.map((task) => {
                return (
                  <TableRow key={task.id} data-testid='history-table-row'>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>
                      {task.month} {task.year}
                    </TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>
                      <div className={`${rootClassName}__assignee`}>
                        <Avatar className={`${rootClassName}__avatar`}>
                          {task.assignee.charAt(0)}
                        </Avatar>
                        <div>{task.assignee}</div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default History;
