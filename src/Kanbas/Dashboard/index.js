import { Link } from "react-router-dom";
import db from "../Database";
import northeastern_img from "../img/northeastern.png"
import { TfiWrite } from "react-icons/tfi"

function Dashboard() {

    const truncateCourseName = (name) => name.length < 24 ? name : name.substring(0, 20) + "...";

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
                <p class="card-text"><i className="wd-icon"><TfiWrite/></i></p>
            </div>
        </div>
    </Link>;

    const courses = db.courses;
    return (
    <div>
      <h3 class="ms-3 mt-3">Dashboard</h3>
      <hr/>
      <div className="container">
        <h4>Published Courses({coursesLength})</h4>
        <hr/>
        <div class="d-flex flex-row flex-wrap">
            {courses.map((course) => ( renderCard(course)))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;