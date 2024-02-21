import React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

import { MONTHS, YEARS } from './constants';
import './styles.scss';

const rootClassName = 'task-allocation-filter';

interface Props {
  month: string;
  year: string;
  handleMonthChange: (e: SelectChangeEvent<string>) => void;
  handleYearChange: (e: SelectChangeEvent<string>) => void;
  clearFilters: VoidFunction;
}

const Filters: React.FC<Props> = ({
  month,
  year,
  handleMonthChange,
  handleYearChange,
  clearFilters
}) => {
  return (
    <div className={rootClassName}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='filter-select-month'>Month</InputLabel>
        <Select
          labelId='filter-select-month'
          id='select-month'
          data-testid='select-month'
          label='Month'
          displayEmpty
          value={month}
          onChange={handleMonthChange}
        >
          {MONTHS.map((month) => (
            <MenuItem value={month} key={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='filter-select-year'>Year</InputLabel>
        <Select
          labelId='filter-select-year'
          id='select-year'
          label='Year'
          displayEmpty
          value={year}
          onChange={handleYearChange}
        >
          {YEARS.map((year) => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant='contained'
        size='small'
        onClick={clearFilters}
        className={`${rootClassName}__resetButton`}
        data-testid='clear-filters'
      >
        Clear
      </Button>
    </div>
  );
};

export default Filters;
