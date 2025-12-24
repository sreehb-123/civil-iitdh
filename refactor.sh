#!/bin/bash

# Codebase Refactoring Script
# This script helps organize the project structure

echo "🚀 Starting codebase refactoring..."

# Phase 1: Move Page Files
echo "📄 Moving page files..."

# Faculty Pages
[ -f "src/pages/FacultyCards.js" ] && mv src/pages/FacultyCards.js src/pages/Faculty/
[ -f "src/pages/AltFacultyPage.js" ] && mv src/pages/AltFacultyPage.js src/pages/Faculty/FacultyDetail.js

# Academic Pages
[ -f "src/pages/Ug.js" ] && mv src/pages/Ug.js src/pages/Academic/UG.js
[ -f "src/pages/Phd.js" ] && mv src/pages/Phd.js src/pages/Academic/
[ -f "src/pages/PhdInfo.js" ] && mv src/pages/PhdInfo.js src/pages/Academic/

# Staff Pages
[ -f "src/pages/StaffInfo.js" ] && mv src/pages/StaffInfo.js src/pages/Staff/

# Institution Pages
[ -f "src/pages/TeachingLabs.js" ] && mv src/pages/TeachingLabs.js src/pages/Institution/
[ -f "src/pages/ResearchLabs.js" ] && mv src/pages/ResearchLabs.js src/pages/Institution/
[ -f "src/pages/Consultancy.js" ] && mv src/pages/Consultancy.js src/pages/Institution/
[ -f "src/pages/Sponsors.js" ] && mv src/pages/Sponsors.js src/pages/Institution/
[ -f "src/pages/Cea.js" ] && mv src/pages/Cea.js src/pages/Institution/
[ -f "src/pages/Donate.js" ] && mv src/pages/Donate.js src/pages/Institution/

# Auth Pages
[ -f "src/pages/Login.js" ] && mv src/pages/Login.js src/pages/Auth/

# Phase 2: Move Component Files
echo "🔧 Moving component files..."

# Layout Components
mkdir -p src/components/Layout
[ -f "src/components/Navbar.js" ] && mv src/components/Navbar.js src/components/Layout/
[ -f "src/components/Footer.js" ] && mv src/components/Footer.js src/components/Layout/
[ -f "src/components/Sidebar.js" ] && mv src/components/Sidebar.js src/components/Layout/

# Faculty Components
mkdir -p src/components/Faculty
[ -f "src/components/Team.js" ] && mv src/components/Team.js src/components/Faculty/FacultyTeam.js
[ -f "src/components/AltAct.js" ] && mv src/components/AltAct.js src/components/Faculty/FacultyActivities.js
[ -f "src/components/AltPub.js" ] && mv src/components/AltPub.js src/components/Faculty/AltPub.js
[ -f "src/components/AltTeach.js" ] && mv src/components/AltTeach.js src/components/Faculty/AltTeach.js
[ -f "src/components/Awards.js" ] && mv src/components/Awards.js src/components/Faculty/
[ -f "src/components/Projects.js" ] && mv src/components/Projects.js src/components/Faculty/
[ -f "src/components/ProfActivities.js" ] && mv src/components/ProfActivities.js src/components/Faculty/
[ -f "src/components/Publications.js" ] && mv src/components/Publications.js src/components/Faculty/
[ -f "src/components/Teaching.js" ] && mv src/components/Teaching.js src/components/Faculty/

# Common Components
mkdir -p src/components/Common
[ -f "src/components/Carousel.js" ] && mv src/components/Carousel.js src/components/Common/
[ -f "src/components/Alerts.js" ] && mv src/components/Alerts.js src/components/Common/
[ -f "src/components/Timeline.js" ] && mv src/components/Timeline.js src/components/Common/
[ -f "src/components/Circulum.js" ] && mv src/components/Circulum.js src/components/Common/Curriculum.js
[ -f "src/components/AltCirculum.js" ] && mv src/components/AltCirculum.js src/components/Common/AlternativeCurriculum.js

# Renderers
mkdir -p src/components/Renderers
[ -f "src/components/StrapiEmailRenderer.js" ] && mv src/components/StrapiEmailRenderer.js src/components/Renderers/StrapiContentRenderer.js

# Move styles to organized folders
echo "🎨 Organizing style files..."
mkdir -p src/styles/components
mkdir -p src/styles/pages

echo "✅ File movement complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update all imports in App.js"
echo "2. Update component imports throughout the codebase"
echo "3. Run: npm start"
echo "4. Fix any import errors"
echo ""
echo "For detailed instructions, see REFACTORING_CHECKLIST.md"
