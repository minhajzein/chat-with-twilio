import React from 'react'
import ChatHeader from './ChatHeader'
import ChatList from './ChatList'
import MessageHandler from '../messages/MessageHandler'

function ChatConsole() {
	return (
		<div className='w-full ml-[342px] relative min-h-screen flex flex-col'>
			<ChatHeader />
			<ChatList />
			<MessageHandler />
		</div>
	)
}

export default ChatConsole
