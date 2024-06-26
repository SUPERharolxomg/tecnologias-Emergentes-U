import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import StudentsRoute from './StudentsRoute';
import TeacherRoute from './TeacherRoute';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoute, TeacherRoute]);
}
