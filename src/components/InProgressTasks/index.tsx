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

const InProgressTasks: React.FC = () => {
  const { inProgressTasks } = useTasks();

  return (
    <div>
      <TableContainer component={Paper} variant='outlined'>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>
                <h4>Task</h4>
              </TableCell>
              <TableCell>
                <h4>Description</h4>
              </TableCell>
              <TableCell>
                <h4>Status</h4>
              </TableCell>
              <TableCell>
                <h4>Action</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inProgressTasks.map((task) => {
              return (
                <TableRow>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>
                    <TaskActions task={task} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InProgressTasks;
