import Home from './components/Home';
import FacultyPage from './components/FacultyPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Faculty from './components/Faculty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faculty' element={<FacultyPage />} />
        <Route path='/facultyy' element={<Faculty />} />
      </Routes>
    </Router>
  );
}

export default App;