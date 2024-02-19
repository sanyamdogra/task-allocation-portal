import {
  History as HistoryIcon,
  Home as HomeIcon,
  Receipt
} from '@mui/icons-material';

import Home from '@pages/Home';
import History from '@pages/History';
import Invoice from '@pages/Invoice';

export const ROUTES_CONFIG = [
  {
    path: '/',
    label: 'Home',
    component: <Home />,
    icon: <HomeIcon />
  },
  {
    path: '/history',
    label: 'History',
    component: <History />,
    icon: <HistoryIcon />
  },
  {
    path: '/invoice',
    label: 'Invoice',
    component: <Invoice />,
    icon: <Receipt />
  }
];
