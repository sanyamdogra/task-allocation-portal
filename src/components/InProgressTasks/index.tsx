import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { useTasks } from '@hooks/useTasks';
import TaskActions from '@components/TaskActions';
import { TABLE_CONFIG } from './tableConfig';
import EmptyState from '@components/EmptyState';

const InProgressTasks: React.FC = () => {
  const { inProgressTasks } = useTasks();

  if (inProgressTasks.length === 0) {
    return <EmptyState info='Nothing is in progress!' />;
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
            {inProgressTasks.map((task) => (
              <TableRow>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>
                  <TaskActions task={task} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InProgressTasks;
