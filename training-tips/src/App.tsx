import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import TrainingDay from './components/TrainingDay';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/home/:training_day" element={ <TrainingDay /> } />
      <Route path="*" element={ <h1>Página não encontrada</h1> } />
    </Routes>
  );
}

export default App;
