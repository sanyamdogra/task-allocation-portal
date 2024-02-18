import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { MONTHS, YEARS } from './constants';

const Filters: React.FC = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='filter-select-month'>Month</InputLabel>
        <Select
          labelId='filter-select-month'
          id='select-month'
          label='Month'
          displayEmpty
          // value={'date'}
          // onChange={handleChange}
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
          // value={'date'}
          // onChange={handleChange}
        >
          {YEARS.map((year) => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
