import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { FaGripVertical, FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules} from "./modulesReducer";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  useEffect (() => {
    client.findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)));
  }, [courseId])
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  }

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) =>{
        dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
    });
  };
  
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
                <button onClick={handleAddModule} class="btn btn-danger float-end">+ Module</button>
            </div>
            <div class="wd-flex-children">
                <button class="btn wd-btn float-end"><FaEllipsisVertical/></button>
            </div>
        </div>
        <hr/>

        <input className="form-control w-50 mt-3 mb-3" value={module.name}
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value }))}
        />
        <textarea className="form-control w-50 mt-3 mb-3" value={module.description}
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value }))}
        />
        <button className="btn wd-btn"  onClick={handleAddModule}>Add</button>
        <button onClick={handleUpdateModule} className="btn wd-btn"> Update</button>


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
                <div className="wd-flex-children">
                <button className="btn btn-secondary me-3"
                    onClick={(event) =>  dispatch(setModule(module)) }>
                    Edit
                </button>

                </div>
                <div className="wd-flex-children">
                <button className="btn btn-secondary me-3"
                    onClick={() => handleDeleteModule(module._id)}>
                    Delete
                </button>

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