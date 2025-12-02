import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Booking } from './pages/booking/booking';
import { Customers } from './pages/customers/customers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'vehicles',
        component: Vehicles,
      },
      {
        path: 'bookings',
        component: Booking,
      },
      {
        path: 'customers',
        component: Customers,
      },
    ],
  },
];
