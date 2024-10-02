import PropTypes from 'prop-types';
import { Alert } from 'antd';

const CustomAlert = (props) => {
  const { message, type, ...rest } = props;
  return <Alert message={message} type={type} {...rest} className="text-dark-900 font-600" />;
};

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomAlert;
