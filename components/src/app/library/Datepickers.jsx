import Datepicker from '@/components/Basic/Datepicker';

function Datepickers() {
  return (
    <div>
      <h1 className="text-30 text-center">Datepickers</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-1">
          <p className="text-20">State</p>

          <div className="mt-40 space-y-14 flex flex-col">
            <p className="text-16">Small</p>
            <p className="text-16">Standard</p>
            <p className="text-16">Large</p>
            <p className="text-16">Range Small</p>
            <p className="text-16">Range Standard</p>
            <p className="text-16">Range Large</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Success</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Datepicker size="small" />
            <Datepicker />
            <Datepicker size="large" />
            <Datepicker range size="small" />
            <Datepicker range />
            <Datepicker range size="large" />
            <Datepicker showTime />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datepickers;
