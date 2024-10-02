import Alert from '@/components/Basic/Alert';

function Alerts() {
  return (
    <div>
      <h1 className="text-30 text-center">Alerts</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-1">
          <p className="text-20">State</p>

          <div className="mt-40 space-y-20 flex flex-col">
            <p className="text-20">Standard</p>
            <p className="text-20">With Close</p>
            <p className="text-20">With Icon</p>
            <p className="text-20">With Description</p>
            <p className="text-20">With Description and Icon</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Success</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Alert message="Success Text" type="success" />
            <Alert message="Success Text" type="success" closable />
            <Alert message="Success Text" type="success" showIcon />
            <Alert
              message="Success Text"
              description="Success Description Success Description Success Description"
              type="success"
            />
            <Alert
              message="Success Text"
              description="Success Description Success Description Success Description"
              type="success"
              showIcon
            />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Info</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Alert message="Info Text" type="info" />
            <Alert message="Info Text" type="info" closable />
            <Alert message="Info Text" type="info" showIcon />
            <Alert message="Info Text" description="Info Description Info Description Info Description" type="info" />
            <Alert
              message="Info Text"
              description="Info Description Info Description Info Description"
              type="info"
              showIcon
            />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Warning</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Alert message="warning Text" type="warning" />
            <Alert message="warning Text" type="warning" closable />
            <Alert message="warning Text" type="warning" showIcon />
            <Alert
              message="warning Text"
              description="warning Description warning Description warning Description"
              type="warning"
            />
            <Alert
              message="warning Text"
              description="warning Description warning Description warning Description"
              type="warning"
              showIcon
            />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Error</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Alert message="error Text" type="error" />
            <Alert message="error Text" type="error" closable />
            <Alert message="error Text" type="error" showIcon />
            <Alert
              message="error Text"
              description="error Description error Description error Description"
              type="error"
            />
            <Alert
              message="error Text"
              description="error Description error Description error Description"
              type="error"
              showIcon
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
