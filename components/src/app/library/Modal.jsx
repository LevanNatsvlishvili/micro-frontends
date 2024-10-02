import Button from '@/components/Basic/Button';
import Modal from '@/components/Basic/Modal';
import { info, success, warning, confirm, error } from '@/components/Basic/Modal/ModalFunc';

function Modals() {
  return (
    <div>
      <h1 className="text-30 text-center">Modals</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-2">
          <p className="text-20">With Function</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Button type="primaryDark" onClick={info}>
              Info
            </Button>
            <Button type="primaryYellow" onClick={success}>
              Success
            </Button>
            <Button
              type="secondaryYellow"
              onClick={() => warning({ title: 'This is a warning', desc: 'Warning Content' })}
            >
              Warning
            </Button>
            <Button danger type="primary" onClick={() => error({ title: 'This is a error', desc: 'Error Content' })}>
              Error
            </Button>
            <Button type="primary" onClick={() => confirm({ title: 'Are you sure', desc: 'Deletes Content' })}>
              Confirm
            </Button>
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-20">Checkbox With Text</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Modal buttonText="Info" isOpen={false} type="info" heading="This is some info" subtext="Info Content" />
            <Modal
              buttonText="Success"
              isOpen={false}
              type="success"
              heading="Some Task has been completed"
              subtext="Success Content"
            />
            <Modal
              buttonText="Warning"
              isOpen={false}
              type="warning"
              heading="This is a warning"
              subtext="Warning Content"
            />
            <Modal buttonText="Error" isOpen={false} type="error" heading="This is a error" subtext="error Content" />
            <Modal buttonText="Confirm" isOpen={false} type="confirm" heading="Are u sure" subtext="error Content" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
