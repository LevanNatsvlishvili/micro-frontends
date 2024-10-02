import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { paths } from './Paths';

const viewItems = [
  {
    title: 'Home',
    href: '',
    active: false,
  },
  {
    title: 'Administration',
    href: '',
    active: false,
  },
  {
    title: 'Gateway Management',
    href: '',
    active: true,
  },
  {
    title: 'WMS Studio',
    href: '',
    active: false,
  },
  {
    title: 'Automation Service',
    href: '',
    active: false,
  },
];

const navItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link to={paths.home}>Home</Link>,
    title: 'Home',
    link: '',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: <Link to={paths.dashboard}>Dashboard</Link>,
    title: 'Dashboard',
    link: '',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: <Link to={paths.login}>Login</Link>,
    title: 'Login',
    link: '',
  },
];

const Layout = {
  navItems,
  viewItems,
};

export default Layout;
