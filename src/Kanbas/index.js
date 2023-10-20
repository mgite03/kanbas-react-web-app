import KanbasNavigation from "./KanbasNavigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css"
import Dashboard from "./Dashboard"
import Courses from "./Courses";

function Kanbas() {
   return (
      <div className="wd-flex-row-container">
        <div class="wd-flex-children d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div class="wd-flex-children wd-flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
        </Routes>

        </div>
      </div>
   );
 }
 export default Kanbas
