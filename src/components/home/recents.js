import React from 'react';
import {NavLink} from 'react-router-dom';
import RecentsItem from '../messages/recentsItem';



const Recents = () => {

	let recentsData = [
	{id:1, name:'Recents1'},
	{id:2, name:'Recents2'},
	{id:3, name:'Recents3'},
	{id:4, name:'Recents4'}
	]



	return(

		<div className ='recents'>

			<h3 className ='recents-header'>
				Recents
			</h3>

			<RecentsItem name={recentsData[0].name} id={recentsData[0].id} />
			<RecentsItem name={recentsData[1].name} id={recentsData[1].id} />
			<RecentsItem name={recentsData[2].name} id={recentsData[2].id} />
			<RecentsItem name={recentsData[3].name} id={recentsData[3].id} />
		</div>


	)
}

export default Recents;