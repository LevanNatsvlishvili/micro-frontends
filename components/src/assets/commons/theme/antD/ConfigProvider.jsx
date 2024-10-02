import PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import { antdCustomTheme } from './theme';

const CustomConfigProvider = ({ children }) => {
  return <ConfigProvider theme={antdCustomTheme}>{children}</ConfigProvider>;
};

CustomConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomConfigProvider;
