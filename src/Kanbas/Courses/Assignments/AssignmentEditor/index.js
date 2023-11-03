import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, setAssignment, updateAssignment } from "../assignmentsReducer.js";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const defaultAssignment = useSelector((state) => state.assignmentsReducer.assignment);
  const assignment = assignmentId === "newAssignment" ? defaultAssignment : assignments.find(
    (assignment) => assignment._id === assignmentId)  
  const editing = !(assignmentId === "newAssignment")
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();

  dispatch(setAssignment(assignment)); // ?
  const handleSave = () => {
    if (editing){
        dispatch(updateAssignment({...assignment, course: courseId}));
    } else {
        dispatch(addAssignment({ ...assignment, course: courseId})); 
    }
    console.log("Added the following object to th list");
    console.log({...assignment, course: courseId });
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const renderAssignmentPage = () =>
  <div>
  <p>Assignment Name</p>
  <input className="form-control mb-2"
        value={assignment.title}
        onChange={(e) => dispatch(setAssignment({
            ...assignment, title: e.target.value }))}
        />
  <textarea className="form-control mb-4"
        value={assignment.description}
        onChange={(e) => dispatch(setAssignment({
            ...assignment, description: e.target.value }))} 
             />
  <div class="row mb-4 me-5">
      <div class="col-4 wd-right-align">Points</div>
      <div class="col-8"><input class="form-control" type="number" value="100"/></div>
  </div>
  <div class="row mt-4 mb-4 me-5">
      <div class="col-4 wd-right-align">Assignment Group</div>
      <div class="col-8">
          <select class="form-select">
              <option>ASSIGNMENTS</option>
          </select>
      </div>
  </div>
  <div class="row mb-4 me-5">
      <div class="col-4 wd-right-align">Display Grade as</div>
      <div class="col-8">
          <select class="form-select">
              <option>Percentage</option>
          </select>
      </div>
  </div>
  <div class="row mb-4 me-5">
      <div class="col-4 wd-right-align"></div>
      <div class="col-8">                             
          <input type="checkbox" name="online-options" id="chkbox-text-entry" />
          <label for="chkbox-text-entry">Do not count this assignment towards the final grade</label>                              
      </div>
  </div>
  <div class="row mb-4 me-5">
      <div class="col-4 wd-right-align">Submission Type</div>
      <div class="col-8">                             
          <div class="wd-assign-border">
              <select class="form-select mb-4">
                  <option>Online</option>
              </select>
              <p class="wd-bold">Online Entry Options</p>
              <input class ="form-check-input mb-4" type="checkbox" name="online-options" id="chkbox-text-entry" />
              <label for="chkbox-text-entry">Text Entry</label><br/>
              <input class ="form-check-input mb-4" type="checkbox" name="online-options" id="chkbox-website-url"/>
              <label for="chkbox-website-url">Website URL</label><br/>
              <input class ="form-check-input mb-4" type="checkbox" name="online-options" id="chkbox-media"/>
              <label for="chkbox-media">Media Recordings</label><br/>
              <input class ="form-check-input mb-4" type="checkbox" name="online-options" id="chkbox-annotation"/>
              <label for="chkbox-annotation">Student Annotation</label> <br/>
              <input class ="form-check-input mb-4" type="checkbox" name="online-options" id="chkbox-file"/>
              <label for="chkbox-file">File Uploads</label>
              <div class="mt-2">Submission Attempts</div>
              <select class="form-select mt-2">
                  <option>Unlimited</option>
              </select>
              <div class="mt-2">Plagiarism Review</div>
              <select class="form-select mt-2">
                  <option>None</option>
              </select>
              <div class="mt-2">Group Assignment</div>
              <input class="mt-2" type="checkbox" name="group-assigment" id="yes-group" />
              <label for="yes-group">This is a group assignment</label><br/>
              <div class = "mt-2">Peer Reviews</div>
              <input class="mt-2" type="checkbox" name="peer-reviews" id="yes-peer-reviews" />
              <label for="yes-peer-reviews">Require Peer Reviews</label><br/>
          </div>                              
      </div>
  </div>
  <div class="row mb-4 me-5">
      <div class="col-4 wd-right-align">Assign</div>
      <div class="col-8">                             
          <div class="wd-assign-border">
              <div class="wd-bold">Assign To</div>
                  <input class="form-control mb-3" type="text" value="Students"/>
                  <p class="wd-bold">Due</p>
                  <input class="form-control mb-3" type="date" value="2021-01-01"/>
                  <div class="row">
                      <div class="col">
                          <p class="wd-bold">Available From</p>
                          <input class="form-control mb-3" type="date" value="2021-01-01"/>
                      </div>
                  <div class="col">
                  <p class="wd-bold">Until</p>
                  <input class="form-control mb-3" type="date" value="2021-01-01"/>
              </div>
          </div>
      </div>
  </div>
</div>
  
  
<button onClick={handleSave} className="btn float-end btn-danger">
  Save
</button>
<Link to={`/Kanbas/Courses/${courseId}/Assignments`}
      className="btn float-end wd-btn">
  Cancel
</Link>

</div>

  return ( renderAssignmentPage()
    
  );
}


export default AssignmentEditor;