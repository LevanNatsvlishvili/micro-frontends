import PropTypes from 'prop-types';
import { Steps } from 'antd';
import Radio from '@/components/Basic/Radio';

const customDot = (_dot, { status }) => {
  return (
    <div className="absolute -left-8 -top-5">
      <Radio checked={status === 'progressed'} />
    </div>
  );
};

const CustomSteps = ({ items }) => {
  return <Steps progressDot={customDot} items={items} />;
};

CustomSteps.propTypes = {
  items: PropTypes.array,
};

export default CustomSteps;
