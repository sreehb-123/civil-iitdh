import Home from './pages/Home';
import Faculties from './pages/Faculties';
import { Routes, Route } from 'react-router-dom';
import FacultyPage from './pages/FacultyPage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import TeachingLabs from './pages/TeachingLabs';
import Footer from './components/Footer';
import ResearchLabs from './pages/ResearchLabs';
import Consultancy from './pages/Consultancy';
import Sponsors from './pages/Sponsors';
import Donate from './pages/Donate';
import Cea from './pages/Cea';
import AcadPrograms from './pages/AcadPrograms';
import NotFound from './pages/NotFound';

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
          <Route path='/research-labs' element={<ResearchLabs />} />
          <Route path='/consultancy' element={<Consultancy />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/cea' element={<Cea />} />
          <Route path='/programs' element={<AcadPrograms />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;