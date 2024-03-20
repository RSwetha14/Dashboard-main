import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
import StudentList from '../src/pages/studentlist';
import BatchList from '../src/pages/batchlist';
import './App.css';
import Training from './components/training/training';
import Attendance from './components/attendance/attendance';
import Mobilization from './components/mobilization/mobilization';
// import Admissions from './components/admissions/admissions';
import Students from './components/students/students';
const MainPage: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/">Dashboard</Link> */}
            </li>
            <li>
              <Link to="/mobilization">Mobilization</Link>
            </li>
            {/* <li> */}
              {/* <Link to="/admissions">Admissions</Link> */}
            {/* </li> */}
            <li>
              <Link to="/attendance">Attendance</Link>
            </li>
            <li>
              <Link to="/training">Training</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/mobilization" element={<Mobilization />} />
          {/* <Route path="/admissions" element={<Admissions />} /> */}
          <Route path="/attendance" element={<Attendance options={[]} />} />
          <Route path="/training" element={<Training />} />
          <Route path="/students" element={<Students options={[]}  />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return <h2>Welcome to Student Batch Tracking System!</h2>;
};

export default MainPage;


