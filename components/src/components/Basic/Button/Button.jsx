import { Button } from 'antd';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { colorTypes } from './ButtonStyles';

const CustomButton = (props) => {
  const { size = 'default', type = 'primaryYellow', icon, disabled, fullWidth, children, ...rest } = props;

  const PropsIcon = icon || null;

  return (
    <Button
      icon={
        icon && (
          <PropsIcon
            disabled
            className={clsx('h-20 w-20 smoothen-300', disabled ? 'fill-dark-60' : colorTypes[type].icon)}
          />
        )
      }
      className={clsx('group ', fullWidth && '!w-full', colorTypes[type].className)}
      size={size}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.elementType,
  type: PropTypes.oneOf(['primary', 'primaryYellow', 'primaryDark', 'secondaryYellow', 'secondaryDark', 'link']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

export default CustomButton;
