import { it, describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import * as useFilterHooks from '@hooks/useFilters';

import { INVOICE_TASKS } from '../dummyData';

import Invoice from '..';

const useFiltersSpy = vi.spyOn(useFilterHooks, 'useFilters');

const mockFilterReturnValue = {
  records: [],
  filterMonth: '',
  filterYear: '',
  clearFilters: vi.fn(),
  handleFilterMonthChange: vi.fn(),
  handleFilterYearChange: vi.fn()
};

describe('Invoice Page', () => {
  it('Should render defined number of rows according to the data provided', () => {
    useFiltersSpy.mockReturnValueOnce({
      ...mockFilterReturnValue,
      records: INVOICE_TASKS
    });

    render(<Invoice />);

    const tableRows = screen.getAllByTestId('invoice-table-row');

    expect(tableRows.length).toBe(INVOICE_TASKS.length);
  });

  it('calls clearFilters function when clear filter button is clicked', () => {
    const clearFiltersMock = vi.fn();

    useFiltersSpy.mockReturnValueOnce({
      ...mockFilterReturnValue,
      records: INVOICE_TASKS,
      clearFilters: clearFiltersMock
    });

    render(<Invoice />);

    const clearFiltersButton = screen.getByTestId('clear-filters');

    fireEvent.click(clearFiltersButton);

    expect(clearFiltersMock).toHaveBeenCalled();
  });

  it('should render the total amount earned when invoices are present', () => {
    useFiltersSpy.mockReturnValueOnce({
      ...mockFilterReturnValue,
      records: INVOICE_TASKS
    });

    render(<Invoice />);

    expect(screen.getByTestId('invoice-total-amount')).toBeInTheDocument();
  });

  it('should render proper components during empty state', () => {
    useFiltersSpy.mockReturnValueOnce(mockFilterReturnValue);

    render(<Invoice />);

    expect(screen.getByTestId('invoices-empty-state')).toBeInTheDocument();

    // Should not be in the document
    expect(
      screen.queryByTestId('invoice-total-amount')
    ).not.toBeInTheDocument();
  });
});
