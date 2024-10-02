import Inputs from './library/Inputs';
import Buttons from './library/Buttons';
import Alerts from './library/Alert';
import Checkbox from './library/Checkbox';
import Modals from './library/Modal';
import Datepickers from './library/Datepickers';
import Switches from './library/Switches';
import StepsCollection from './library/Steps';
import Selects from './library/Select';

function App() {
  return (
    <div>
      <Selects />
      <StepsCollection />
      <Switches />
      <Datepickers />
      <Modals />
      <Checkbox />
      <Alerts />
      <Inputs />
      <Buttons />
    </div>
  );
}

export default App;
