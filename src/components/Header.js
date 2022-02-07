import beaver from '../UI_Assignment_Assets_10-17-18/ThunkableBeaver.png';
import plus_sign from '../UI_Assignment_Assets_10-17-18/Plus Sign.svg';

import './Header.css';

const Header = props => {

   return <div className='header'>
      <img style={{paddingLeft: '5%', marginBottom: '20px'}} src={beaver}/>
      <h1 style={{padding: '0 0 0 5%', margin: '0'}}>MY PROJECTS</h1>
      <div style={{borderBottom: '1px solid black', margin: '0', padding: '0'}}></div>
      <img className='half-out-button'
           onClick={() => props.newProjectHandler()}
           src={plus_sign}/>
   </div>

};

export default Header;