import PropTypes from 'prop-types';
import { Input } from 'antd';
import clsx from 'clsx';
import { LoadingOutlined } from '@ant-design/icons';
import { lazy } from 'react';
const Select = lazy(() => import('@/components/Basic/Select'));

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
    default: 'text-14 font-500 leading-22',
    large: 'text-14 font-500 leading-22',
  },
  icon: {
    small: 'text-16',
    default: 'text-20',
    large: 'text-24',
  },
};

const InputType = (props) => {
  const { type = 'default', ...rest } = props;
  if (type === 'password') {
    return <Input.Password {...rest} />;
  }
  return <Input {...rest} />;
};

const SelectType = (props) => {
  const { ...rest } = props;
  return <Select {...rest} />;
};

const CustomInput = (props) => {
  const { label, loading, square, options, fullWidth, size = 'default', status, ...rest } = props;
  return (
    <span>
      {label && <label className={clsx('mb-4 text-dark-900 ', sizes.label[size])}>{label}</label>}
      <div className="relative">
        <InputType
          addonBefore={options && <SelectType options={options} />}
          size={size}
          {...rest}
          className={clsx(
            styles.base,
            styles.hover,
            styles.focus,
            styles.disabled,
            status === 'success' && styles.onSuccess,
            status === 'error' && styles.onError,
            status === 'processing' && styles.onProcessing,
            square && '!px-20',
            fullWidth && 'w-full',
          )}
        />
        {loading && (
          <span className="absolute top-50-percent -translate-y-50-percent right-10">
            <LoadingOutlined
              className={clsx(
                status === 'success' && styles.onSuccess,
                status === 'error' && styles.onError,
                status === 'processing' && styles.onProcessing,
                sizes.icon[size],
                ' ',
              )}
            />
          </span>
        )}
      </div>
    </span>
  );
};

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['success', 'error', 'processing']),
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  label: PropTypes.string,
  type: PropTypes.oneOf(['default', 'password', 'email']),
  square: PropTypes.bool,
  options: PropTypes.array,
  fullWidth: PropTypes.bool,
};

InputType.propTypes = {
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['success', 'error', 'processing']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  type: PropTypes.oneOf(['default', 'password', 'email']),
};

export default CustomInput;
