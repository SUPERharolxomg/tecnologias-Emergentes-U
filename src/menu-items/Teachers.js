import { TeamOutlined } from '@ant-design/icons';

const icons = { TeamOutlined };
const Teacher = {
  id: 'Teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'Teachers',
      title: 'Teachers',
      type: 'item',
      url: '/Teachers',
      icon: icons.TeamOutlined
    }
  ]
};
export default Teacher;
