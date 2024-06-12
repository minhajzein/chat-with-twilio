import ChatConsole from './components/Chats/ChatConsole'
import Conversations from './components/Conversations/Conversations'

function App() {
	return (
		<div className='flex'>
			<Conversations />
			<ChatConsole />
		</div>
	)
}

export default App
