import Home from '@pages/Home';
import History from '@pages/History';
import Invoice from '@pages/Invoice';

export const ROUTES_CONFIG = [
  {
    path: '/',
    label: 'Home',
    component: <Home />
  },
  {
    path: '/history',
    label: 'History',
    component: <History />
  },
  {
    path: '/invoice',
    label: 'Invoice',
    component: <Invoice />
  }
];
