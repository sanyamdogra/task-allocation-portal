import { useCallback, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { Task } from '@common/types';

interface UseFilters {
  records: Task[];
  filterMonth: string;
  filterYear: string;
  clearFilters: VoidFunction;
  handleFilterMonthChange: (e: SelectChangeEvent<string>) => void;
  handleFilterYearChange: (e: SelectChangeEvent<string>) => void;
}

export const useFilters = (data: Task[]): UseFilters => {
  const [records, setRecords] = useState(data);
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');

  const filterRecords = useCallback(
    (invoicesToFilter: Task[], year: number, month: string) => {
      let filteredInvoices = invoicesToFilter;

      if (month) {
        filteredInvoices = filteredInvoices.filter(
          (invoice) => invoice.month === month
        );
      }

      if (year) {
        filteredInvoices = filteredInvoices.filter(
          (invoice) => invoice.year === year
        );
      }

      setRecords(filteredInvoices);
    },
    []
  );
  const clearFilters = useCallback(() => {
    setFilterMonth('');
    setFilterYear('');
    setRecords(data);
  }, [data]);

  const handleFilterMonthChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      setFilterMonth(e.target.value);
      filterRecords(data, Number(filterYear), e.target.value);
    },
    [filterRecords, filterYear, data]
  );

  const handleFilterYearChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      setFilterYear(e.target.value);
      filterRecords(data, Number(e.target.value), filterMonth);
    },
    [filterRecords, filterMonth, data]
  );

  return {
    records,
    filterMonth,
    filterYear,
    clearFilters,
    handleFilterMonthChange,
    handleFilterYearChange
  };
};
