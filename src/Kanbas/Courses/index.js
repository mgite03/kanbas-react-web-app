import db from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes, useLocation, Link } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import {GiHamburgerMenu} from 'react-icons/gi';
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments/index.js";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({ courses }) {
    const {pathname} = useLocation();
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const breadcrumbStr = pathname.substring(pathname.lastIndexOf("/") + 1);
    return (
    <div> 
        
        <div className="wd-flex-row-container ms-3 mt-3">
            <div className="wd-flex-children me-3 wd-link-styling">
                <GiHamburgerMenu/>
            </div>
            <div className="wd-flex-children wd-flex-grow-1">
                <nav className="wd-breadcrumb" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item wd-link-styling"><Link key={0} to={"./"}>{course.name}</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{breadcrumbStr}</li>
                    </ol>
                </nav>
            </div>
        </div>

        <hr/>


        <div className="wd-flex-row-container">
            <div className="wd-flex-children">
                <CourseNavigation />
            </div>
            <div className="wd-flex-children wd-flex-grow-1">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}
                    />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>


    </div>
  );
}
export default Courses;