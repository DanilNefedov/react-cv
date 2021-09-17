import React from 'react';
import Search from './components/home/search';
import Recents from './components/home/recents';
import Groups from './components/home/groups';
import Chat from './components/messages/chat';





const Messages = () => {

	return(
		<div className = 'messages'>

			<div className='colm-sec'>
				<Search/>
				<Groups/>
				<Recents/>
			</div>

			<Chat/>
				
		</div>
	)
}

export default Messages;