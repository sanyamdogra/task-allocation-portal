import React from 'react';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { useTasks } from '@hooks/useTasks';
import EmptyState from '@components/EmptyState';
import { TABLE_CONFIG } from './tableConfig';

const TasksAvailable: React.FC = () => {
  const { availableTasks, moveToInProgressTasks } = useTasks();

  if (availableTasks.length === 0) {
    return <EmptyState info='No tasks available!' />;
  }

  return (
    <div>
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
            {availableTasks.map((task) => (
              <TableRow>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>
                  <Button
                    size='small'
                    variant='outlined'
                    onClick={() => moveToInProgressTasks(task)}
                  >
                    Assign
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TasksAvailable;
