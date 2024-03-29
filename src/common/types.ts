export interface Task {
  name: string;
  description: string;
  status: string;
  assignee: string;
  amount: number;
  id: number;
  month?: string;
  year?: number;
}
