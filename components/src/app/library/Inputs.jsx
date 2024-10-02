import Input from '@/components/Basic/Input';

function Inputs() {
  return (
    <div>
      <h1 className="text-30 text-center">Inputs</h1>
      <div className="grid grid-cols-6 gap-x-20 p-30">
        <div>
          <div className="mt-40 space-y-20 flex flex-col">
            <p className="text-20">Small</p>
            <p className="text-20">Standard</p>
            <p className="text-20">Large</p>
            <p className="text-20">With Password</p>
            <p className="text-20">Disabled</p>
            <p className="text-20">With Label</p>
          </div>
        </div>
        <div>
          <div className="mt-40 space-y-10 flex flex-col">
            <Input placeholder="Basic usage" size="small" />
            <Input placeholder="Basic usage" />
            <Input placeholder="Basic usage" size="large" />
            <Input placeholder="Basic usage" type="password" />
            <Input placeholder="Basic usage" disabled />
            <Input placeholder="Basic usage" label="With Label" />
          </div>
        </div>
        <div>
          <div className="mt-40 space-y-20 flex flex-col">
            <p className="text-20">success</p>
            <p className="text-20">error</p>
            <p className="text-20">processing</p>
            <p className="text-20">success loading</p>
            <p className="text-20">error loading</p>
            <p className="text-20">processing loading</p>
          </div>
        </div>
        <div>
          <div className="mt-40 space-y-10 flex flex-col">
            <Input placeholder="Basic usage" status="success" />
            <Input placeholder="Basic usage" status="error" />
            <Input placeholder="Basic usage" status="processing" />
            <Input placeholder="Basic usage" loading status="success" />
            <Input placeholder="Basic usage" loading status="error" />
            <Input placeholder="Basic usage" loading status="processing" />
          </div>
        </div>
        <div>
          <div className="mt-40 space-y-34 flex flex-col">
            <p className="text-20">Square</p>
            <p className="text-20">With Select</p>
          </div>
        </div>
        <div>
          <div className="mt-40 space-y-10 flex flex-col">
            <div className="w-48">
              <Input size="large" square />
            </div>
            <Input options fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
