import React from 'react';
import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';

import { Task } from '@common/types';
import { useTasks } from '@hooks/useTasks';

interface Props {
  task: Task;
}

const TaskActions: React.FC<Props> = ({ task }) => {
  const { moveToAvailableTasks, moveToCompletedTasks } = useTasks();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id='task-action'
        aria-controls={open ? 'task-action' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id='task-action'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'task-action'
        }}
      >
        <MenuItem onClick={() => moveToCompletedTasks(task)}>
          Mark as done
        </MenuItem>
        <MenuItem onClick={() => moveToAvailableTasks(task)}>
          Un-assign
        </MenuItem>
      </Menu>
    </>
  );
};

export default TaskActions;
