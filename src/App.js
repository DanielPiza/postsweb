import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Otras rutas pueden ir aquí */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;