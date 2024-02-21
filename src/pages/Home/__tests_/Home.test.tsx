import { it, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TasksProvider } from '@contexts/tasks';
import * as useTasksHooks from '@hooks/useTasks';
import { AVAILABLE_TASKS } from '@contexts/tasks/dummyData';

import Home from '..';

const useTasksSpy = vi.spyOn(useTasksHooks, 'useTasks');

const mockUseTasksHookValue = {
  availableTasks: [],
  inProgressTasks: [],
  completedTasks: [],
  moveToAvailableTasks: vi.fn(),
  moveToInProgressTasks: vi.fn(),
  moveToCompletedTasks: vi.fn()
};

describe('Home Page', () => {
  it('Should render the empty state component when no tasks are available', () => {
    useTasksSpy.mockReturnValueOnce(mockUseTasksHookValue);

    render(
      <TasksProvider>
        <Home />
      </TasksProvider>
    );

    expect(
      screen.getByTestId('task-available-empty-state')
    ).toBeInTheDocument();
  });

  it('Should render the correct number of rows when tasks are available', () => {
    useTasksSpy.mockReturnValueOnce({
      ...mockUseTasksHookValue,
      availableTasks: AVAILABLE_TASKS
    });

    render(
      <TasksProvider>
        <Home />
      </TasksProvider>
    );

    // Should not render the empty state component
    expect(
      screen.queryByTestId('task-available-empty-state')
    ).not.toBeInTheDocument();

    expect(screen.getAllByTestId('available-tasks-table-row').length).toBe(
      AVAILABLE_TASKS.length
    );
  });
});
