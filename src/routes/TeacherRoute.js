import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import { lazy } from 'react';

const Teachers = Loadable(lazy(() => import('pages/Teachers')));
const Create = Loadable(lazy(() => import('pages/Teachers/create')));
const Edit = Loadable(lazy(() => import('pages/Teachers/edit')));

const TeacherRoute = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'teachers',
      element: <Teachers />
    },
    {
      path: 'teachers/create',
      element: <Create />
    },
    {
      path: 'teachers/edit/:teachersId',
      element: <Edit />
    }
  ]
};

export default TeacherRoute;
