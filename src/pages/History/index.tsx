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
import { HISTORIC_TASKS } from '@common/constants';

const History: React.FC = () => {
  return (
    <div>
      <h3>History</h3>
      <Filters />
      <Box sx={{ p: 3 }}>
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
                  <h4>Assignee</h4>
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
                      {task.assignee}
                      <span>
                        <Avatar sx={{ width: 24, height: 24 }}>N</Avatar>
                      </span>
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
