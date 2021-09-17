import React from 'react';
import Message from './message';



const MessagesList = () => {

	let messagesItem = [
	{id:1, message:'first'},
	{id:2, message:'second'},
	{id:3, message:'third'}
	]

	return(
		<div className="field-chat">
			<Message message={messagesItem[0].message}/>
			<Message message={messagesItem[1].message}/>
			<Message message={messagesItem[2].message}/>
		</div>
	)
}


export default MessagesList;