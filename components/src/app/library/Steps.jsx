import Steps from '@/components/Complex/Steps';

function StepsCollection() {
  return (
    <div>
      <h1 className="text-30 text-center">StepsCollection</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-1">
          <p className="text-20">State</p>
          <Steps />
        </div>
      </div>
    </div>
  );
}

export default StepsCollection;
