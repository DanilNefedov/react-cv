import React from 'react';
import MessagesList from './messagesList';





const Chat = () => {

	return(

		<div className='chat'>
			<div className="container">
				<div className="chat-header">
					<img src="" alt="User"/>
					<div className='name-user-chat'>
						<h3>Name</h3>
						<p>Online / Ofline</p>
					</div>
				</div>
				
				<MessagesList/>

				<div className="input-chat">
					<input className='input-chat-text' type="text"/>
				</div>
			</div>
		</div>

	)
}

export default Chat;