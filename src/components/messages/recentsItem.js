import React from 'react';
import {NavLink} from 'react-router-dom';


const RecentsItem = (props) => {
	let path = '/Messages/' + props.id;
	
	return(	
		<NavLink to={path} className='recents-item'>
			{props.name}
		</NavLink>
	)
}


export default RecentsItem;