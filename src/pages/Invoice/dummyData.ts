import { Task } from '@common/types';

export const INVOICE_TASKS: Task[] = [
  {
    name: 'BXP-123',
    description: 'Color mismatch',
    status: 'Open',
    assignee: 'Tim',
    amount: 500,
    id: 112,
    month: 'July',
    year: 2022
  },
  {
    name: 'BXP-134',
    description: 'Broken link',
    status: 'Open',
    assignee: 'Jack',
    amount: 300,
    id: 113,
    month: 'August',
    year: 2023
  },
  {
    name: 'BXP-302',
    description: 'Icon not found',
    status: 'Open',
    assignee: 'Jack',
    amount: 200,
    id: 114,
    month: 'August',
    year: 2023
  }
];
