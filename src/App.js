import Login from './Login';
import Missing from './Missing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/missing" element={<Missing />} />
      </Routes>
    </Router>

  );
}

export default App;