import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Layout/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home>Hello</Home>} />
    </Routes>
  );
}          

export default App;
