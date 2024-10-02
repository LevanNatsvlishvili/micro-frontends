import Button from '@/components/Basic/Button';
import { PlusCircleFilled } from '@ant-design/icons';

function Buttons() {
  return (
    <div>
      <h1 className="text-30 text-center">Buttons</h1>
      <div className="grid grid-cols-6 gap-x-20 p-30">
        <div>
          <p className="text-20">State</p>

          <div className="mt-40 space-y-20 flex flex-col">
            <p className="text-20">Small</p>
            <p className="text-20">Standard</p>
            <p className="text-20">Large</p>
            <p className="text-20">Disabled</p>
            <p className="text-20">With Icon</p>
          </div>
        </div>
        <div>
          <p className="text-20">Primary Yellow</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Button size="small">Small</Button>
            <Button>Standard</Button>
            <Button size="large">Large</Button>
            <Button disabled>Disabled</Button>
            <Button icon={PlusCircleFilled}>Default with icon</Button>
          </div>
        </div>
        <div>
          <p className="text-20">Primary Dark</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Button type="primaryDark" size="small">
              Small
            </Button>
            <Button type="primaryDark">Standard</Button>
            <Button type="primaryDark" disabled icon={PlusCircleFilled}>
              Disabled
            </Button>
            <Button type="primaryDark" size="large">
              Large
            </Button>
            <Button type="primaryDark" icon={PlusCircleFilled}>
              Default with icon
            </Button>
          </div>
        </div>
        <div>
          <p className="text-20">Secondary Yellow</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Button type="secondaryYellow" size="small">
              Small
            </Button>
            <Button type="secondaryYellow">Standard</Button>
            <Button type="secondaryYellow" disabled icon={PlusCircleFilled}>
              Disabled
            </Button>
            <Button type="secondaryYellow" size="large">
              Large
            </Button>
            <Button type="secondaryYellow" icon={PlusCircleFilled}>
              Default with icon
            </Button>
          </div>
        </div>
        <div>
          <p className="text-20">Secondary Dark</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Button type="secondaryDark" size="small">
              Small
            </Button>
            <Button type="secondaryDark">Standard</Button>
            <Button type="secondaryDark" disabled icon={PlusCircleFilled}>
              Disabled
            </Button>
            <Button type="secondaryDark" size="large">
              Large
            </Button>
            <Button type="secondaryDark" icon={PlusCircleFilled}>
              Default with icon
            </Button>
          </div>
        </div>
        <div>
          <p className="text-20">Link</p>
          <div className="mt-40 space-y-10 flex flex-col">
            <Button type="link" size="small">
              Small
            </Button>
            <Button type="link">Standard</Button>
            <Button type="link" disabled icon={PlusCircleFilled}>
              Disabled
            </Button>
            <Button type="link" size="large">
              Large
            </Button>
            <Button type="link" icon={PlusCircleFilled}>
              Default with icon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
