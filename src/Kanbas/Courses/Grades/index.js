import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaGear } from 'react-icons/fa6'
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div class="wd-flex-children wd-flex-grow-1">
            <div class="row">
                <div class="col">
                    <button class="btn wd-btn float-end"><i class="wd-icon"><FaGear/></i></button>

                    <div class="dropdown">
                        <button class="btn dropdown-toggle float-end wd-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="wd-icon"><FaFileExport/></i>
                            Export
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Other Options</a></li>
                        </ul>
                    </div>
                    <button class="btn float-end wd-btn"> <i class="wd-icon"><FaFileImport/></i> Import</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3>Student Names</h3>
                    <input class="form-select" type="text" placeholder="Search Students"/>
                </div>
                <div class="col">
                    <h3>Assignment Names</h3>
                    <input class="form-select" type="text" placeholder="Search Assignments"/>
                </div>
            </div>
            <div class="row">
                <div class="col"><button class="btn float-start">Apply Filters</button></div>
            </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-2">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td><p className="wd-link-styling">{user.firstName} {user.lastName}</p></td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>);
}
export default Grades;