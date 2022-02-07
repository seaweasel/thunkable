import icon from '../UI_Assignment_Assets_10-17-18/defaultProjectIcon_2x.png';
import trash from '../UI_Assignment_Assets_10-17-18/DeleteIcon.svg';
import edit from '../UI_Assignment_Assets_10-17-18/EditIcon.svg';
import {useState} from "react";

const Project = props => {
   const date = new Date(props.date);
   const dateString = date.toLocaleDateString('en-US',{  year: 'numeric', month: 'short', day: 'numeric' });
   const minutes = date.getMinutes();
   const hours = date.getHours() % 12;
   const amPM = date.getHours() > 11 ? 'am' : 'pm';


   const [name, updateName] = useState(props.name);
   const nameChangeHandler = event => {
      updateName(event.target.value);
   }

   const nameElement = props.editting ?
      <input autoFocus
             onBlur={() => props.updateProjectToEditHandler('')}
             value={name} onChange={nameChangeHandler}
             type='text'
             id='name'
             onTouchEnd={() => props.updateProjectToEditHandler('')}/>
      : name;


   return <div style={{
      borderTop:'2px solid #F7F9FD',
      borderBottom:'2px solid #F7F9FD',
      marginTop:'-1px',
      marginBottom:'-1px',
      margin: '0px 0px 0px 5%',
      display:'flex',
      justifyContent:'space-between'}}>
      <div>
         <img src={icon} height='30px' width='30px' style={{borderRadius:'50%'}}/>
         <span>{nameElement}</span>
         <img onClick={() => props.updateProjectToEditHandler(props.id)} src={edit} height='30px' width='30px' style={{borderRadius:'50%'}}/>
      </div>
      {dateString} {hours}:{minutes} {amPM}
      <img onClick={() => props.removeProjectHandler(props.id)} src={trash} height='20px' width='20px' style={{borderRadius:'50%'}}/>
   </div>
}

export default Project;