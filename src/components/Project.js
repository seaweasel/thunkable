import icon from '../UI_Assignment_Assets_10-17-18/defaultProjectIcon_2x.png';
import trash from '../UI_Assignment_Assets_10-17-18/DeleteIcon.svg';
import edit from '../UI_Assignment_Assets_10-17-18/EditIcon.svg';

const Project = props => {
   const date = new Date(props.date);
   const dateString = date.toLocaleDateString('en-US',{  year: 'numeric', month: 'short', day: 'numeric' });
   const minutes = date.getMinutes();
   const hours = date.getHours() % 12;
   const amPM = date.getHours() > 11 ? 'am' : 'pm';

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
         {props.name}
         <img src={edit} height='30px' width='30px' style={{borderRadius:'50%'}}/>
      </div>
      {dateString} {hours}:{minutes} {amPM}
      <img onClick={() => props.removeProjectHandler(props.id)} src={trash} height='20px' width='20px' style={{borderRadius:'50%'}}/>
   </div>
}

export default Project;