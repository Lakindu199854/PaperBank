import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import PaperPage from './pages/PaperPage';

import AddUniversity from './pages/AddUniversity';
import AddCourse from './pages/AddCourse';
import UploadPaper from './pages/UploadPaper';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/university/:universityId" element={<CoursePage />} />
          <Route path="/course/:courseId" element={<PaperPage />} />

          <Route path="/admin/university" element={<AddUniversity />} />
          <Route path="/admin/course" element={<AddCourse />} />
          <Route path="/admin/upload" element={<UploadPaper />} />
        </Routes>
    
    </Router>
  );
}

export default App;


/*
  BrowserRouter-(aliased as Router)	Wraps your whole app and enables routing using the browser's URL
  Routes-Container that holds all your <Route> definitions
  Route-Defines a path and the component that should render for that path
*/