import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import TabPanel from '@components/TabPanel';
import TasksAvailable from '@components/TasksAvailable';
import InProgressTasks from '@components/InProgressTasks';

import './styles.scss';

const rootClassName = 'task-allocation-home';

const Home: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
  };

  return (
    <div className={rootClassName}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          className={`${rootClassName}__tabs`}
        >
          <Tab label='Tasks Available' className={`${rootClassName}__tab`} />
          <Tab label='In Progress' className={`${rootClassName}__tab`} />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <TasksAvailable />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <InProgressTasks />
      </TabPanel>
    </div>
  );
};

export default Home;
