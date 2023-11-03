import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlinePlus } from 'react-icons/ai';
import { FaEllipsisVertical, FaCircleCheck } from 'react-icons/fa6';
import { FaEdit, FaGripVertical} from 'react-icons/fa';
import { useSelector } from "react-redux";


function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  const sectionToPercent = {"ASSIGNMENTS" : 40, "QUIZZES": 10, "EXAMS": 20, "PROJECT": 30};

  const renderAssignmentSectionHeader = (title) =>
  <li class="list-group-item wd-assignment-big-list mt-3"> 
    <i class="wd-icon"><FaGripVertical/></i>
    {title}
    <i class="wd-icon float-end"><FaEllipsisVertical/></i>
    <i class="wd-icon float-end"><AiOutlinePlus/></i>
    <button class="btn btn-light rounded-pill float-end">{sectionToPercent[title]}% of Total</button> 
  </li>

  const renderAssignmentLink = (assignment) =>
    <li className="list-group-item wd-left-green wd-flex-row-container">
      <div class="wd-flex-children">
        <i class="wd-icon"><FaGripVertical/></i>
        <i class="wd-icon wd-check"><FaEdit/></i>
      </div>
      <div class="wd-flex-children wd-flex-grow-1">
        <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="wd-assignment-link wd-bold">
          {assignment.title}
        </Link>

        
        <p className="mb-0"><a className="wd-link-styling">Multiple Modules</a> | Due {assignment.due} | 100pts</p>
        </div>
        <div class="wd-flex-children">
            <i class="wd-icon wd-check"><FaCircleCheck/></i>
            <i class="wd-icon"><FaEllipsisVertical/></i>
        </div>
    </li>


  return (
    <div>
      <div class="wd-flex-row-container">
        <div class="wd-flex-children">
            <input class="form-control wd-search-for-assignments" type="text" placeholder="Search For Assignments"/>
        </div>
        <div class="wd-flex-children wd-flex-grow-1"></div>
        <div class="wd-flex-children"><button class="btn wd-btn float-end"><i class="wd-icon me-2"><AiOutlinePlus/></i>Group</button></div>
        <div class="wd-flex-children"><Link to={`/Kanbas/Courses/${courseId}/Assignments/newAssignment`} className="btn btn-danger float-end"><i class="wd-icon"><AiOutlinePlus/></i>Assignment</Link></div>
        <div class="wd-flex-children"><button class="btn wd-btn float-end"><i class="wd-icon"><FaEllipsisVertical/></i></button></div>
      </div>
      <hr/>
      <ul className="list-group">
        {renderAssignmentSectionHeader("ASSIGNMENTS")}
        {courseAssignments.filter((assignment) => assignment.type === "assignment")
        .map((assignment) => (renderAssignmentLink(assignment)))}
        {renderAssignmentSectionHeader("QUIZZES")}
        {courseAssignments.filter((assignment) => assignment.type === "quiz")
        .map((assignment) => (renderAssignmentLink(assignment)))}
        {renderAssignmentSectionHeader("EXAMS")}
        {courseAssignments.filter((assignment) => assignment.type === "exam")
        .map((assignment) => (renderAssignmentLink(assignment)))}
        {renderAssignmentSectionHeader("PROJECT")}
        {courseAssignments.filter((assignment) => assignment.type === "project")
        .map((assignment) => (renderAssignmentLink(assignment)))}
      </ul>

    </div>
  );
}
export default Assignments;