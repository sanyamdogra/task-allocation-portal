import Home from '@pages/Home';
import History from '@pages/History';

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
    component: <Home />
  }
];
