import { Navbar } from './components/navbar.jsx';
import { BrowserRouter } from 'react-router';
import { Routing } from './components/routing.jsx';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routing></Routing>
    </BrowserRouter>
  
  );
}

export default App;
