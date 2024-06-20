import MessageTile from '../messages/MessageTile'

function ChatList() {
	return (
		<div className='p-4 flex flex-col-reverse gap-5 w-full min-h-screen overflow-y-auto hover:scroll-auto'>
			<MessageTile />
			<MessageTile />
			<MessageTile />
			<MessageTile />
			<MessageTile />
			<MessageTile />
			<MessageTile />
			<MessageTile />
		</div>
	)
}

export default ChatList
