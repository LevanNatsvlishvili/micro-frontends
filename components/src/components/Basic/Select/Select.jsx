import PropTypes from 'prop-types';
import { Select } from 'antd';
import clsx from 'clsx';

const styles = {
  base: 'border-dark-40 ',
  hover: 'hover:border-[#A6A7AC]',
  focus: 'focus:border-dark-900 focus:ring-dark-900 !typed:border-dark-80',
  disabled: 'disabled:border-grey-900 disabled:!bg-grey-50',
  onSuccess: '!border-yellow-70 !text-yellow-900 placeholder-yellow-900',
  onError: '!border-red-200 !text-red-900 placeholder-red-900',
  onProcessing: '!border-green-200 !text-green-900 placeholder-green-900',
};

const sizes = {
  label: {
    small: 'text-12 font-500 leading-22',
    middle: 'text-14 font-500 leading-22',
    large: 'text-14 font-500 leading-22',
  },
};

const CustomSelect = (props) => {
  const { onChange, fullWidth, label, size = 'middle', ...rest } = props;
  return (
    <span>
      {label && <label className={clsx('mb-4 text-dark-900 ', sizes.label[size])}>{label}</label>}
      <div className="relative w-full">
        <Select
          onChange={onChange}
          size={size}
          className={clsx(styles.base, styles.hover, styles.focus, styles.disabled, fullWidth && 'w-full')}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
          {...rest}
        />
      </div>
    </span>
  );
};

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

export default CustomSelect;
