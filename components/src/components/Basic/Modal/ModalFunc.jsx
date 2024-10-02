import { Modal } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { colorTypes } from '../Button/ButtonStyles';
import clsx from 'clsx';

export const info = () => {
  Modal.info({
    // title: 'This is a notification message',
    content: (
      <div className="">
        <p className="text-16 leading-22 text-dark-900 font-500">This is some info</p>
        <p className="text-14 leading-22 text-dark-300 mt-8">Some contents...</p>
      </div>
    ),
    icon: <InfoCircleOutlined className="text-22 !text-dark-900" />,
    mask: true,
    maskClosable: true,
    okButtonProps: {
      className: colorTypes.primaryYellow.className,
    },
  });
};

export const success = () => {
  Modal.success({
    content: (
      <div className="">
        <p className="text-16 leading-22 text-dark-900 font-500">Some task has completed</p>
        <p className="text-14 leading-22 text-dark-300 mt-8">Some contents...</p>
      </div>
    ),
    icon: <CheckCircleOutlined className="text-22 !text-green-900" />,
    mask: true,
    maskClosable: true,
    okButtonProps: {
      className: clsx(colorTypes.primaryYellow.className, 'mt-24'),
    },
    okText: 'Done',
  });
};

export const warning = ({ title, desc }) => {
  Modal.warning({
    content: (
      <div className="">
        <p className="text-16 leading-22 text-dark-900 font-500">{title}</p>
        <p className="text-14 leading-22 text-dark-300 mt-8">{desc}</p>
      </div>
    ),
    icon: <InfoCircleOutlined className="text-22 !text-yellow-900" />,
    mask: true,
    maskClosable: true,
    okButtonProps: {
      className: clsx(colorTypes.primaryYellow.className, 'mt-24'),
    },
    okText: 'Done',
  });
};

export const error = ({ title, desc }) => {
  Modal.error({
    content: (
      <div className="">
        <p className="text-16 leading-22 text-dark-900 font-500">{title}</p>
        <p className="text-14 leading-22 text-dark-300 mt-8">{desc}</p>
      </div>
    ),
    icon: <CloseCircleOutlined className="text-22 !text-red-900" />,
    mask: true,
    maskClosable: true,
    okButtonProps: {
      className: clsx(colorTypes.primaryYellow.className, 'mt-24'),
    },
    okText: 'Done',
  });
};

export const confirm = ({ title, desc }) => {
  Modal.confirm({
    content: (
      <div className="">
        <p className="text-16 leading-22 text-dark-900 font-500">{title}</p>
        <p className="text-14 leading-22 text-dark-300 mt-8">{desc}</p>
      </div>
    ),
    icon: <InfoCircleOutlined className="text-22 !text-red-900" />,
    mask: true,
    maskClosable: true,
    okButtonProps: {
      className: clsx('mt-24'),
      danger: true,
    },
    cancelButtonProps: {
      className: clsx(colorTypes.secondaryDark.className, 'mt-24'),
    },

    okText: 'Yes',
    cancelText: 'No',
  });
};
