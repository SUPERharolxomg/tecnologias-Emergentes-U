import MainLayout from 'layout/MainLayout/index';

const Teachers = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'Teachers',
      element: <>Hello teachers</>
    }
  ]
};

export default Teachers;
