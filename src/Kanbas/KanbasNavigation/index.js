import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import { BiHelpCircle } from 'react-icons/bi';
import { FaGauge, FaBook, FaNetworkWired , FaShareFromSquare} from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { AiOutlineInbox, AiOutlineClockCircle } from 'react-icons/ai';
import northeastern_img from '../img/northeastern.png'

function KanbasNavigation() {
  const links = ["Dashboard", "Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<FaUserCircle/>, <FaGauge/>, <FaBook/>, <BsCalendar3/>, <AiOutlineInbox/>, <AiOutlineClockCircle/>, <FaNetworkWired/>, <FaShareFromSquare/>, <BiHelpCircle/>];
  const icon_render = (index) => index === 1 ? "wd-icon" : "wd-red-icon";
  const li_class_name = (link, index) => `list-group-item wd-nav-bar-item ${(pathname.includes(link) && index != 0) && "active"}`
  const img_render = (link, index) => index === 0 ?
  <Link
    key={index}
    to={`/Kanbas/${link}`}
    className={``}>
    <img src={northeastern_img} class=" northeastern-img"></img>
  </Link>                                                        
  :
  <Link
    key={index}
    to={`/Kanbas/${link}`}
    className={`wd-nav-bar-link ${pathname.includes(link) && "wd-nav-bar-active-link"}`}>
    <i className={icon_render(index)}> {icons[index - 1]} </i>
    {link}
  </Link>;


  const { pathname } = useLocation();


  return (
    <ul className="list-group wd-nav-bar">
      {links.map((link, index) => (
            <li className={li_class_name(link, index)}>
              {img_render(link, index)}
            </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;