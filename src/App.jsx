import './App.scss';
import Containr from './components/Containr';
import { ThemeProvider } from './content/ThemeContext';

function App() {
  return (
    <>
    <ThemeProvider>
       <Containr/>
    </ThemeProvider>
    </>
  );
}

export default App;
