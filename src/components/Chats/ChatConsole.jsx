import MessageHandler from '../messages/MessageHandler'
import ChatHeader from './ChatHeader'
import ChatList from './ChatList'

//imports................................................................................................

function ChatConsole() {
	return (
		<div className='w-full bg-[#F9F9F9] ml-[342px] min-h-dvh max-h-dvh relative flex flex-col'>
			<div className='h-full w-full overflow-y-auto scrollbar-hidden'>
				<ChatHeader />
				<ChatList />
				<MessageHandler />
			</div>
		</div>
	)
}

export default ChatConsole
