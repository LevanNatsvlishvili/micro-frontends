import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const ChildrenIcons = {
  checkedChildren: <CheckOutlined />,
  unCheckedChildren: <CloseOutlined />,
};

const CustomSwitch = (props) => {
  const { checkedChildren, unCheckedChildren, withIcons, ...rest } = props;

  const children = () => {
    if (typeof checkedChildren === 'string' && typeof unCheckedChildren === 'string') {
      return { checkedChildren, unCheckedChildren };
    }
    if (withIcons) {
      return ChildrenIcons;
    }
    return {};
  };
  return <Switch {...children()} className="w-fit" defaultChecked {...rest} />;
};

CustomSwitch.propTypes = {
  checkedChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  unCheckedChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  withIcons: PropTypes.bool,
};

export default CustomSwitch;
