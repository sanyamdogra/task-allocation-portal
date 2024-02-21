import { Task } from '@common/types';

export const HISTORIC_TASKS: Task[] = [
  {
    name: 'BXP-123',
    description: 'Color mismatch',
    status: 'Done',
    assignee: 'Tim',
    amount: 100,
    id: 112,
    month: 'July',
    year: 2022
  },
  {
    name: 'BXP-134',
    description: 'Broken link',
    status: 'Closed',
    assignee: 'Jack',
    amount: 100,
    id: 113,
    month: 'March',
    year: 2023
  },
  {
    name: 'BXP-302',
    description: 'Icon not found',
    status: 'Done',
    assignee: 'Jack',
    amount: 100,
    id: 114,
    month: 'June',
    year: 2022
  },
  {
    name: 'BXP-304',
    description: 'Hyperlink issue',
    status: 'Done',
    assignee: 'Ron',
    amount: 100,
    id: 115,
    month: 'June',
    year: 2023
  }
];
