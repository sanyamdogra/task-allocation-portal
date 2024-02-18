import { createContext, useCallback, useMemo, useState } from 'react';

import { Task } from '@common/types';
import { HISTORIC_TASKS } from '@common/constants';

export interface TasksContextValue {
  availableTasks: Task[];
  inProgressTasks: Task[];
  moveToInProgressTasks: (task: Task) => void;
  moveToAvailableTasks: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextValue>({
  availableTasks: [],
  inProgressTasks: [],
  moveToInProgressTasks: () => {},
  moveToAvailableTasks: () => {}
});

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [availableTasks, setAvailableTasks] = useState(HISTORIC_TASKS);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);

  const moveToInProgressTasks = useCallback(
    (task: Task) => {
      const updatedTask: Task = { ...task, status: 'In Progress' };

      setInProgressTasks((oldInProgressTasks) => [
        ...oldInProgressTasks,
        updatedTask
      ]);

      const updatedAvailableTasks = [...availableTasks].filter(
        (availableTask) => availableTask.id !== task.id
      );

      setAvailableTasks(updatedAvailableTasks);
    },
    [availableTasks]
  );

  const moveToAvailableTasks = useCallback(
    (task: Task) => {
      const updatedTask: Task = { ...task, status: 'Open' };

      setAvailableTasks((oldAvailableTasks) => [
        ...oldAvailableTasks,
        updatedTask
      ]);

      const updatedInProgressTasks = [...inProgressTasks].filter(
        (inProgressTask) => inProgressTask.id !== task.id
      );

      setInProgressTasks(updatedInProgressTasks);
    },
    [inProgressTasks]
  );

  const values = useMemo<TasksContextValue>(
    () => ({
      availableTasks,
      inProgressTasks,
      moveToInProgressTasks,
      moveToAvailableTasks
    }),
    [
      availableTasks,
      inProgressTasks,
      moveToAvailableTasks,
      moveToInProgressTasks
    ]
  );

  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
