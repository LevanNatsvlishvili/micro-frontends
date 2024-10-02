import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Datepicker = (props) => {
  const { range, ...rest } = props;
  if (range) return <RangePicker {...rest} />;
  return <DatePicker {...rest} />;
};

Datepicker.propTypes = {
  range: PropTypes.bool,
};

export default Datepicker;
