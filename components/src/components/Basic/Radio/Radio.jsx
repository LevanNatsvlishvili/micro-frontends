import PropTypes from 'prop-types';
import { Radio } from 'antd';

const types = {
  button: {
    buttonType: 'outlined',
    optionType: 'button',
  },
  radio: {
    optionType: 'radio',
    buttonType: 'solid',
  },
};

const CustomRadio = (props) => {
  const { type, group, text, options, ...rest } = props;

  if (group) return <Radio.Group options={options} {...types[type]} {...rest} />;
  return (
    <Radio {...types[type]} {...rest}>
      {text}
    </Radio>
  );
};

CustomRadio.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  group: PropTypes.bool,
};

export default CustomRadio;
