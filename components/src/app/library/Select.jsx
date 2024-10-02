import Dropdown from '@/components/Basic/Dropdown';
import Select from '@/components/Basic/Select';
import { SettingOutlined, FlagOutlined, LogoutOutlined } from '@ant-design/icons';

function Selects() {
  return (
    <div className="bg-dark-60">
      <h1 className="text-30 text-center">Selects</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-1">
          <p className="text-20">State</p>
          <div className="mt-40 space-y-20 flex flex-col">
            <p className="text-20">Standard</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Select</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Select label="Select" fullWidth />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Select</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Dropdown items={items} text="Welcome Levan" avatar="LN" />
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default Selects;
