import { Link } from "react-router-dom";
import { React } from "react";
import db from "../Database";
import northeastern_img from "../img/northeastern.png"
import { TfiWrite } from "react-icons/tfi"

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
    const truncateCourseName = (name) => name.length < 23 ? name : name.substring(0, 19) + "...";

    const coursesLength = db.courses.length;

    const renderCard = (course) =>
    <Link key={course._id}
         to={`/Kanbas/Courses/${course._id}`} 
         className="list-group-item">
        <div className="card wd-dashboard-card">
            <img src={northeastern_img} class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title">{truncateCourseName(course.name)}</h5>
                <p class="card-text">{course.number}.12631.202410</p>
                <p class="card-text">203410_1 Fall 2023 Semester Full Term</p>
                <button className="btn wd-btn"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                <button className="btn wd-btn"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

                <p class="card-text"><i className="wd-icon"><TfiWrite/></i></p>
            </div>
        </div>
    </Link>;

    return (
    <div>
      <h3 class="ms-3 mt-3">Dashboard</h3>
      <hr/>
      <div className="container">
        <h4>Published Courses({coursesLength})</h4>
        <hr/>
        <h5>Add/Update Courses</h5>
      <input value={course.name} className="form-control w-50 mt-3 mb-3" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control w-50 mt-3 mb-3" 
          onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control w-50 mt-3 mb-3" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control w-50 mt-3 mb-3" type="date" 
          onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addNewCourse} className="btn wd-btn mt-2">
        Add
      </button>
      <button onClick={updateCourse} className="btn wd-btn mt-2">
        Update
      </button>


        <div class="d-flex flex-row flex-wrap">
            {courses.map((course) => ( renderCard(course)))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;