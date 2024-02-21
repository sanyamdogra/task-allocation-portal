import { createContext, useCallback, useMemo, useState } from 'react';

import { Task } from '@common/types';

import { AVAILABLE_TASKS } from './dummyData';

export interface TasksContextValue {
  availableTasks: Task[];
  inProgressTasks: Task[];
  completedTasks: Task[];
  moveToInProgressTasks: (task: Task) => void;
  moveToAvailableTasks: (task: Task) => void;
  moveToCompletedTasks: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextValue>({
  availableTasks: [],
  inProgressTasks: [],
  completedTasks: [],
  moveToInProgressTasks: () => {},
  moveToAvailableTasks: () => {},
  moveToCompletedTasks: () => {}
});

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [availableTasks, setAvailableTasks] = useState(AVAILABLE_TASKS);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

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

  const moveToCompletedTasks = useCallback(
    (task: Task) => {
      const updatedTask: Task = { ...task, status: 'Done' };

      setCompletedTasks((oldAvailableTasks) => [
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
      completedTasks,
      moveToInProgressTasks,
      moveToAvailableTasks,
      moveToCompletedTasks
    }),
    [
      availableTasks,
      inProgressTasks,
      completedTasks,
      moveToAvailableTasks,
      moveToInProgressTasks,
      moveToCompletedTasks
    ]
  );

  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};
