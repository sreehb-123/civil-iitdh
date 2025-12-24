/**
 * Routes Configuration
 * Centralized route definitions for the application
 */

import { ROUTES } from '../utils/constants';

// Import pages
import Home from '../pages/Home';
import FacultyCards from '../pages/Faculty/FacultyCards';
import AltFacultyPage from '../pages/Faculty/FacultyDetail';
import Login from '../pages/Auth/Login';
import TeachingLabs from '../pages/Institution/TeachingLabs';
import ResearchLabs from '../pages/Institution/ResearchLabs';
import Consultancy from '../pages/Institution/Consultancy';
import Sponsors from '../pages/Institution/Sponsors';
import Donate from '../pages/Institution/Donate';
import Cea from '../pages/Institution/Cea';
import AcadPrograms from '../pages/Academic/UG';
import NotFound from '../pages/NotFound';
import Phd from '../pages/Academic/PhD';
import PhdInfo from '../pages/Academic/PhdInfo';
import StaffInfo from '../pages/Staff/StaffInfo';
import Circulum from '../components/Common/Curriculum';
import AltCirculum from '../components/Common/AlternativeCurriculum';

export const appRoutes = [
  {
    path: ROUTES.HOME,
    element: Home,
    name: 'Home',
  },
  {
    path: ROUTES.FACULTIES,
    element: FacultyCards,
    name: 'Faculties',
  },
  {
    path: ROUTES.FACULTY_DETAIL,
    element: AltFacultyPage,
    name: 'Faculty Detail',
  },
  {
    path: ROUTES.LOGIN,
    element: Login,
    name: 'Login',
  },
  {
    path: ROUTES.TEACHING_LABS,
    element: TeachingLabs,
    name: 'Teaching Labs',
  },
  {
    path: ROUTES.RESEARCH_LABS,
    element: ResearchLabs,
    name: 'Research Labs',
  },
  {
    path: ROUTES.CONSULTANCY,
    element: Consultancy,
    name: 'Consultancy',
  },
  {
    path: ROUTES.SPONSORS,
    element: Sponsors,
    name: 'Sponsors',
  },
  {
    path: ROUTES.DONATE,
    element: Donate,
    name: 'Donate',
  },
  {
    path: ROUTES.CEA,
    element: Cea,
    name: 'CEA',
  },
  {
    path: ROUTES.UG,
    element: AcadPrograms,
    name: 'Undergraduate',
  },
  {
    path: ROUTES.PHD,
    element: Phd,
    name: 'PhD',
  },
  {
    path: ROUTES.PHD_INFO,
    element: PhdInfo,
    name: 'PhD Info',
  },
  {
    path: ROUTES.STAFF,
    element: StaffInfo,
    name: 'Staff',
  },
  {
    path: ROUTES.CURRICULUM,
    element: Circulum,
    name: 'Curriculum',
  },
  {
    path: ROUTES.ALT_CURRICULUM,
    element: AltCirculum,
    name: 'Alternative Curriculum',
  },
  {
    path: ROUTES.NOT_FOUND,
    element: NotFound,
    name: 'Not Found',
  },
];
