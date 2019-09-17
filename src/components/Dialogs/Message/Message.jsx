import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';


const Message = (props) => {
	return (
			<div className={s.message}>
				{props.text}
			</div>
		)
}


export default Message;