import { it, describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import * as useFilterHooks from '@hooks/useFilters';

import { HISTORIC_TASKS } from '../dummyData';

import History from '..';

const useFiltersSpy = vi.spyOn(useFilterHooks, 'useFilters');

const mockFilterReturnValue = {
  records: [],
  filterMonth: '',
  filterYear: '',
  clearFilters: vi.fn(),
  handleFilterMonthChange: vi.fn(),
  handleFilterYearChange: vi.fn()
};

describe('History Page', () => {
  it('Should render defined number of rows according to the data provided', () => {
    useFiltersSpy.mockReturnValueOnce({
      ...mockFilterReturnValue,
      records: HISTORIC_TASKS
    });

    render(<History />);

    const tableRows = screen.getAllByTestId('history-table-row');

    expect(tableRows.length).toBe(HISTORIC_TASKS.length);
  });

  it('calls clearFilters function when clear filter button is clicked', () => {
    const clearFiltersMock = vi.fn();

    useFiltersSpy.mockReturnValueOnce({
      ...mockFilterReturnValue,
      records: HISTORIC_TASKS,
      clearFilters: clearFiltersMock
    });

    render(<History />);

    const clearFiltersButton = screen.getByTestId('clear-filters');

    fireEvent.click(clearFiltersButton);

    expect(clearFiltersMock).toHaveBeenCalled();
  });

  it('should render correct components in the empty state', () => {
    useFiltersSpy.mockReturnValueOnce({
      ...mockFilterReturnValue
    });

    render(<History />);

    expect(screen.getByTestId('history-empty-state')).toBeInTheDocument();
  });
});
