import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import Button from '@/components/Basic/Button';

const CustomModal = (props) => {
  const { onClose, buttonProps, buttonText, isOpen, heading, subtext } = props;
  const [open, setOpen] = useState(isOpen);

  const handleModal = () => {
    setOpen((p) => !p);
  };

  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleModal} {...buttonProps}>
        {buttonText}
      </Button>
      <Modal
        className="modal-component"
        closable={true}
        onCancel={handleModal}
        open={open}
        footer={[
          <div key="container" className="p-10 border border-transparent border-t-[#F0F0F0] space-x-8">
            {!onClose && (
              <Button type="secondaryDark" size="small" key="back" onClick={handleClose}>
                Cancel
              </Button>
            )}
            <Button size="small" key="back" onClick={handleModal}>
              OK
            </Button>
          </div>,
        ]}
      >
        <div className="h-54 py-16 px-24 text-dark-99 text-16 leading-22 font-500 border border-transparent border-b-[#F0F0F0]">
          Basic modal
        </div>
        <div className="flex items-start p-24">
          <div className="">
            <p className="text-16 leading-22 text-dark-900 font-500">{heading}</p>
            <p className="text-14 leading-22 text-dark-300 mt-8">{subtext}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

CustomModal.propTypes = {
  heading: PropTypes.string,
  subtext: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
  buttonProps: PropTypes.object,
  buttonText: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default CustomModal;
