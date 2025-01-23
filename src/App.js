import Home from './components/Home';
import Faculties from './components/Faculties';
import { Routes,Route } from 'react-router-dom';
import FacultyPage from './components/FacultyPage';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faculties' element={<Faculties />} />
        <Route path='/facultyPage/:id' element={<FacultyPage />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
