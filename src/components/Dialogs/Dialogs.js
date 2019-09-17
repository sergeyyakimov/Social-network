import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../Redux/dialogs-reducer.js';

const Dialogs = (props) => {
	let state = props.dialogsPage;
	
	let dialogsElements = state.dialogs
	.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = state.messages
	.map(message => <Message text={message.message} />);

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					<div>{messagesElements}</div>
					<div>
						<div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
						<div><button onClick={onSendMessageClick}>Send</button></div>			
					</div>
				</div>
			</div>
		)
}

export default Dialogs;





