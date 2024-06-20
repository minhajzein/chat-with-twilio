import React from 'react'
import ChatHeader from './ChatHeader'
import ChatList from './ChatList'
import MessageHandler from '../messages/MessageHandler'

function ChatConsole() {
	return (
		<div className='w-full bg-[#F9F9F9] ml-[342px] relative flex flex-col'>
			<ChatHeader />
			<ChatList />
			<MessageHandler />
		</div>
	)
}

export default ChatConsole
