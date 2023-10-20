import ModuleList from "../Modules/ModuleList";
import { useParams } from "react-router-dom";
import  { FaRegCheckCircle } from 'react-icons/fa';
import { FaFileImport } from 'react-icons/fa6';
import { BsBoxArrowRight, BsBarChartFill, BsMegaphone, BsBell} from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi'

function Home() {

    const { courseId } = useParams();
    const icons_list = [<FaFileImport/>, <BsBoxArrowRight/>, <BiTargetLock/>, <BsBarChartFill/>,
                         <BsMegaphone/>, <BsBarChartFill/>, <BsBell/>];
    const options_list = ["Import Existing Content", "Import From Commons", "Choose Home Page", 
                            "View Course Stream", "New Announcement", "New Analytics", "View Course Notifications"]

    return (
      <div className="wd-flex-row-container">
        <div className="wd-flex-children wd-flex-grow-1">
            <ModuleList />
        </div>
        <div className="wd-flex-children wd-flex-grow-1 ms-5">
            <button class="btn wd-btn">Unpublish</button>
                    <button class="btn btn-success" disabled><FaRegCheckCircle/>Published</button>
                        <ul class="list-group">
                        {options_list.map((option, index) => (
                                <li className="list-group-item list-group-item-secondary mt-2 mb-2">
                                <i className="wd-icon">{icons_list[index]}</i>
                                {option}
                                </li>
                        ))}
                        </ul>
                    <h2>Coming Up</h2>
                    <a href="#">View Calendar</a>
                    <br/>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#">Lecture {courseId} Sep 7 at 11:45am</a></li>
                        <li class="list-group-item"><a href="#">Lecture {courseId}  Sep 11 at 11:45am</a></li>
                        <li class="list-group-item"><a href="#">{courseId} Lecture Sep 11 at 6pm</a></li>
                    </ul>
        </div>
        
      </div>
    );
  }
  export default Home;