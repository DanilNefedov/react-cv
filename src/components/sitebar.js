import React from 'react';
import {NavLink} from 'react-router-dom';



const Sitebar = () => {

	return(

		<div className='siteBar'>

			<div className='siteBar__img'>
				<a href="#c">
					<img src="" alt="User"/>{/*img path*/}
				</a>
			</div>


			<nav className='navigation'>
				<NavLink to='../Home' className='nav-item'>
					Home
				</NavLink>

				<NavLink to='../Messages' className='nav-item'>
					Chats
				</NavLink>

				<NavLink to='../Notifications' className='nav-item'>
					Notifications
				</NavLink>	

				<NavLink to='../Profile' className='nav-item'>
					Settings
				</NavLink>	

			</nav>
				


			<div>
				Sing In
			</div>


		</div>
	);
}


export default Sitebar;