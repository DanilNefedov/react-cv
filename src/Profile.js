import React from 'react';
import Search from './components/home/search';



const Profile = () => {
	
	return(
		<div className ='profile'>
			<Search/>

			<div className='profile-container'>
				<div className='profile-set'>
					Profile-settings
				</div>
				<div className='profile-acc'>
					Account settings
				</div>
			</div>
		</div>
			
	)
}


export default Profile;