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

import './styles.scss';

const rootClassName = 'task-allocation-history-page';

const History: React.FC = () => {
  return (
    <div className={rootClassName}>
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
