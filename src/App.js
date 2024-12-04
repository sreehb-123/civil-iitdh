import Home from './components/Home';
import FacultyPage from './components/FacultyPage';
import { BrowserRouter as Routes,Route } from 'react-router-dom';
import Faculty from './components/Faculty';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faculty' element={<FacultyPage />} />
        <Route path='/facultyPage' element={<Faculty />} />
      </Routes>
    </>
  );
}

export default App;