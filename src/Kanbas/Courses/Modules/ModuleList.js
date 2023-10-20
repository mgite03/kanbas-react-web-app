import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6'
import { AiOutlinePlus } from 'react-icons/ai'


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div> 
        <div class="wd-flex-row-container">
            <div class="wd-flex-children wd-flex-grow-1"></div>
            <div class="wd-flex-children"><button class="btn wd-btn">Collapse All</button></div>
            <div class="wd-flex-children"><button class="btn wd-btn float-end">View Progress</button></div>
            <div class="dropdown">
                <button class="btn dropdown-toggle float-end wd-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="wd-check">< FaRegCheckCircle/></i>
                    Publish All
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item">Publish All Modules and Items</a></li>
                <li><a class="dropdown-item">Publish Modules Only action</a></li>
                <li><a class="dropdown-item">Unpublish</a></li>
                </ul>
            </div>
            <div class="wd-flex-children">
                <button class="btn btn-danger float-end">+ Module</button>
            </div>
            <div class="wd-flex-children">
                <button class="btn wd-btn float-end"><FaEllipsisVertical/></button>
            </div>
        </div>
        <hr/>

    <ul className="list-group mt-5 ms-5 me-5 mb-5">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-secondary mb-5">
            <div className="wd-flex-row-container">
                <div className="wd-flex-children me-4">
                    <FaGripVertical/>
                </div>
                <div className="wd-flex-children wd-flex-grow-1">
                    {module.name} - 
                     {module.description}
                </div>
                <div className="wd-flex-children wd-icon wd-check">
                    <FaCheckCircle/>
                </div>
                <div className="wd-flex-children wd-icon">
                    <AiOutlinePlus/>
                </div>
                <div className="wd-flex-children wd-icon">
                    <FaEllipsisVertical/>
                </div>
            </div>
           </li>
      ))
      }
    </ul>
    </div>
  );
}
export default ModuleList;