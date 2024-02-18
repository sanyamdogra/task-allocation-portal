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

import { HISTORIC_TASKS } from '../../common/constants';

const TasksAvailable: React.FC = () => {
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
            {HISTORIC_TASKS.map((task) => {
              return (
                <TableRow>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>
                    <Button
                      size='small'
                      variant='outlined'
                      // onClick={() => handlePredictButton(image.imageURI)}
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
