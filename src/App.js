import Home from './components/Home';
import Faculties from './components/Faculties';
import { Routes, Route } from 'react-router-dom';
import FacultyPage from './components/FacultyPage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import TeachingLabs from './components/TeachingLabs';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faculties' element={<Faculties />} />
          <Route path='/facultyPage/:id' element={<FacultyPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teaching-labs' element={<TeachingLabs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;