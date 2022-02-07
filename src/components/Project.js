import icon from '../UI_Assignment_Assets_10-17-18/defaultProjectIcon_2x.png';
import trash from '../UI_Assignment_Assets_10-17-18/DeleteIcon.svg';
import edit from '../UI_Assignment_Assets_10-17-18/EditIcon.svg';
import {useState} from "react";

import './Project.css';

const Project = props => {
   const date = new Date(props.date);
   const dateString = date.toLocaleDateString('en-US',{  year: 'numeric', month: 'short', day: 'numeric' });
   const minutes = date.getMinutes();
   const hours = date.getHours() % 12;
   const amPM = date.getHours() < 11 ? 'am' : 'pm';


   const [name, updateName] = useState(props.name);
   const nameChangeHandler = event => {
      updateName(event.target.value);
   }

   const nameElement = props.editting ?
      <input autoFocus
             onBlur={() => props.updateProjectToEditHandler('')}
             value={name} onChange={nameChangeHandler}
             type='text'
             id={props.id}
             onTouchEnd={() => props.updateProjectToEditHandler('')}/>
      : name;


   return <div className='project'>
      <div>
         <img className='beaver-icon' src={icon} height='30px' width='30px' style={{borderRadius:'50%'}}/>
         <span className='name'>{nameElement}</span>
         <img onClick={() => props.updateProjectToEditHandler(props.id)} src={edit} height='30px' width='30px' style={{borderRadius:'50%'}}/>
      </div>
      {dateString} {hours}:{minutes} {amPM}
      <img onClick={() => props.removeProjectHandler(props.id)} src={trash} height='20px' width='20px' style={{borderRadius:'50%'}}/>
   </div>
}

export default Project;