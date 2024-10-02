import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const CustomCheckbox = (props) => {
  const { text, ...rest } = props;
  return <Checkbox {...rest}>{text}</Checkbox>;
};

CustomCheckbox.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
};

export default CustomCheckbox;
