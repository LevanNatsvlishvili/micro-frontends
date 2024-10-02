import PropTypes from 'prop-types';
import { SettingOutlined, FlagOutlined, LogoutOutlined } from '@ant-design/icons';
import Dropdown from '@/components/Basic/Dropdown';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Settings
      </a>
    ),
    icon: <SettingOutlined className="text-20" />,
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Language
      </a>
    ),
    icon: <FlagOutlined className="text-20" />,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Logout
      </a>
    ),
    icon: <LogoutOutlined className="text-20" />,
  },
];

const UserMenu = (props) => {
  const { text, avatar } = props;
  return <Dropdown items={items} text={text} avatar={avatar} />;
};

UserMenu.propTypes = {
  text: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserMenu;
