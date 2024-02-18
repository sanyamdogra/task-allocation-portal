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
import { HISTORIC_TASKS } from '@common/constants';

const Invoice: React.FC = () => {
  return (
    <div>
      <h3>Invoice</h3>
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
                  <h4>Amount</h4>
                </TableCell>
                <TableCell>
                  <h4>Invoice</h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {HISTORIC_TASKS.map((task) => {
                return (
                  <TableRow>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.amount}</TableCell>
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
    </div>
  );
};

export default Invoice;
