import Conversations from '../components/Conversations/Conversations'
import ChatConsole from '../components/Chats/ChatConsole'

// imports................................................................

function ChatPage() {
	return (
		<div className='flex'>
			<Conversations />
			<ChatConsole />
		</div>
	)
}

export default ChatPage
