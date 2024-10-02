import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import clsx from 'clsx';

const CustomDropdown = (props) => {
  const { items, text, avatar } = props;
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      className="w-fit h-44 p-6 rounded-16 min-w-200"
      open={open}
      onOpenChange={(p) => setOpen(p)}
      arrow
      trigger={['click']}
      menu={{ items }}
    >
      <a
        className={clsx('hover:bg-white smoothen-500 flex items-center space-x-12', open && 'bg-white')}
        onClick={(e) => e.preventDefault()}
      >
        {avatar && <Avatar className="bg-yellow-60 text-yellow-900">{avatar}</Avatar>}
        <p className=" text-14 leading-20 font-500 text-dark-900">{text}</p>
        <DownOutlined className={clsx('!ml-auto smoothen-300', open && 'rotate-180')} />
      </a>
    </Dropdown>
  );
};

CustomDropdown.propTypes = {
  items: PropTypes.array,
  text: PropTypes.string,
  avatar: PropTypes.string,
};

export default CustomDropdown;
