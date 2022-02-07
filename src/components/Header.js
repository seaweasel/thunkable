import beaver from '../UI_Assignment_Assets_10-17-18/ThunkableBeaver.png';
import plus_sign from '../UI_Assignment_Assets_10-17-18/Plus Sign.svg';

import './Header.css';

const Header = props => {

   return <div className='header'>
      <img  className='beaver' src={beaver}/>
      <h1 className='h1'>MY PROJECTS</h1>
      <div className='linebreak'></div>
      <img className='half-out-button'
           onClick={() => props.newProjectHandler()}
           src={plus_sign}/>
   </div>

};

export default Header;