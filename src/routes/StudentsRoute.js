import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import { lazy } from 'react';

const Students = Loadable(lazy(() => import('pages/Students')));
const Create = Loadable(lazy(() => import('pages/Students/create')));
const Edit = Loadable(lazy(() => import('pages/Students/edit')));

const StudentsRoute = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'students',
      element: <Students />
    },
    {
      path: 'students/create',
      element: <Create />
    },
    {
      path: 'students/edit/:studentId',
      element: <Edit />
    }
  ]
};

export default StudentsRoute;
