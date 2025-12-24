/**
 * Application Constants
 * Centralized configuration for API endpoints, routes, and other constants
 */

// API Configuration
export const API_BASE_URL = process.env.REACT_APP_STRAPI_URL;

// API Endpoints
export const API_ENDPOINTS = {
  FACULTIES: '/faculties',
  PHD_STUDENTS: '/phds',
  STAFF: '/staffs',
  ABOUT: '/about',
  TEA_CHING_LABS: '/teaching-labs',
  RESEARCH_LABS: '/research-labs',
  CONSULTANCY: '/consultancy',
  SPONSORS: '/sponsors',
};

// Route Paths
export const ROUTES = {
  HOME: '/',
  FACULTIES: '/faculties',
  FACULTY_DETAIL: '/facultyPage/:id',
  LOGIN: '/login',
  TEACHING_LABS: '/teaching-labs',
  RESEARCH_LABS: '/research-labs',
  CONSULTANCY: '/consultancy',
  SPONSORS: '/sponsors',
  DONATE: '/donate',
  CEA: '/cea',
  UG: '/ug',
  PHD: '/phd',
  PHD_INFO: '/phd-info',
  STAFF: '/staff',
  CURRICULUM: '/circulum',
  ALT_CURRICULUM: '/alt-circulum',
  NOT_FOUND: '*',
};

// Component Sections
export const FACULTY_SECTIONS = {
  EDUCATION: 'edu-exp',
  RESEARCH_TEAM: 'research-team',
  PUBLICATIONS: 'publications',
  PROFESSIONAL_ACTIVITIES: 'prof-activities',
  TEACHING: 'teaching',
};

// Loading States
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

// HTTP Headers
export const HTTP_HEADERS = {
  'Content-Type': 'application/json',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 25,
};
