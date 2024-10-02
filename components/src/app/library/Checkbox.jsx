import Checkbox from '@/components/Basic/Checkbox';
import Radio from '@/components/Basic/Radio';
import { useState } from 'react';

function Checkboxes() {
  const [radioVal, setRadioVal] = useState('');
  const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  const onChange = (e) => {
    setRadioVal(e.target.value);
  };
  return (
    <div>
      <h1 className="text-30 text-center">Checkbox</h1>
      <div className="grid grid-cols-9 gap-x-20 p-30">
        <div className="col-span-1">
          <p className="text-20">State</p>

          <div className="mt-40 space-y-10 flex flex-col">
            <p className="text-14">Check false</p>
            <p className="text-14">Check true</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Checkbox With Text</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Checkbox text="Checked false" />
            <Checkbox text="Checked true" checked={true} />
            <Checkbox text="Indeterminate true" indeterminate={true} />
            <Checkbox text="Checked disabled" disabled checked />
            <Checkbox text="Unchecked disabled" disabled />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Checkbox </p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Checkbox />
            <Checkbox checked={true} />
            <Checkbox indeterminate={true} />
            <Checkbox disabled checked />
            <Checkbox disabled />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-20">Checkbox </p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Radio onChange={onChange} value={radioVal} size="small" text="text" />
          </div>
        </div>
        <div className="col-span-2 ">
          <p className="text-20">Radio button group</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Radio group onChange={onChange} value={radioVal} options={options} type="button" size="small" />
            <Radio group onChange={onChange} value={radioVal} options={options} type="button" />
            <Radio group onChange={onChange} value={radioVal} options={options} type="button" size="large" />
          </div>
        </div>
        <div className="col-span-2 ">
          <p className="text-20">Radio button group</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Radio group onChange={onChange} value={radioVal} options={options} size="small" />
            <Radio group onChange={onChange} value={radioVal} options={options} />
            <Radio group onChange={onChange} value={radioVal} options={options} size="large" />
            <Radio group onChange={onChange} value={radioVal} options={options} disabled checked="male" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkboxes;
