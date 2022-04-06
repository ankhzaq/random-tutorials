import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiSelect />
      <MuiTextField />
      <MuiButton />
    </div>
  );
}

export default App;
