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

const TasksAvailable: React.FC = () => {
  const { availableTasks, moveToInProgressTasks } = useTasks();

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
            {availableTasks.map((task) => {
              return (
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TasksAvailable;
