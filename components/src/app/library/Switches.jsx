import Switch from '@/components/Basic/Switch';

function Switches() {
  return (
    <div>
      <h1 className="text-30 text-center">Switches</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-1">
          <p className="text-20">State</p>

          <div className="mt-40 space-y-12 flex flex-col">
            <p className="text-14">Standard</p>
            <p className="text-14">Loading</p>
            <p className="text-14">Disabled</p>
            <p className="text-14">With Check icon</p>
            <p className="text-14">With text</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Default</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Switch />
            <Switch loading />
            <Switch disabled />
            <Switch withIcons />
            <Switch unCheckedChildren="On" checkedChildren="Off" />
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-20">State</p>

          <div className="mt-40 space-y-10 flex flex-col">
            <p className="text-12">Standard</p>
            <p className="text-12">Loading</p>
            <p className="text-12">Disabled</p>
            <p className="text-12">With Check icon</p>
            <p className="text-12">With text</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Small</p>
          <div className="mt-40 space-y-12 flex flex-col">
            <Switch size="small" />
            <Switch size="small" loading />
            <Switch size="small" disabled />
            <Switch size="small" withIcons />
            <Switch size="small" unCheckedChildren="On" checkedChildren="Off" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Switches;
