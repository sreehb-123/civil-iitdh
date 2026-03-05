import Home from './pages/Home';
import FacultyCards from './pages/People/FacultyCards';
import { Routes, Route } from 'react-router-dom';
import FacultyDetail from './pages/People/FacultyDetail';
import Navbar from './components/Layout/Navbar';
import TeachingLabs from './pages/Institution/TeachingLabs';
import Footer from './components/Layout/Footer';
import ResearchLabs from './pages/Institution/ResearchLabs';
import Consultancy from './pages/Institution/Consultancy';
import Sponsors from './pages/Institution/Sponsors';
import Donate from './pages/Institution/Donate';
import Cea from './pages/Institution/Cea';
import AcadPrograms from './pages/Academic/UG';
import NotFound from './pages/NotFound';
import Phd from './pages/Academic/Phd';
import PhdInfo from './pages/People/PhdInfo';
import StaffInfo from './pages/People/StaffInfo';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faculties' element={<FacultyCards />} />
          <Route path='/facultyPage/:id' element={<FacultyDetail />} />
          <Route path='/teaching-labs' element={<TeachingLabs />} />
          <Route path='/research-labs' element={<ResearchLabs />} />
          <Route path='/consultancy' element={<Consultancy />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/cea' element={<Cea />} />
          <Route path='/ug' element={<AcadPrograms />} />
          <Route path='/phd' element={<Phd />} />
          <Route path='/phd-info' element={<PhdInfo />} />
          <Route path='/staff' element={<StaffInfo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;