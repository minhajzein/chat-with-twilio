import MessageTile from '../messages/MessageTile'
import ChatListSkelton from '../../skeltons/chats/ChatListSkelton'
import { useParams } from 'react-router-dom'
import { useGetMessagesQuery } from '../../redux/apiSlices/messageApiSlice'
import { useRef } from 'react'

//imports.................................................

function ChatList() {
	const { telenumber } = useParams()
	const { data, isSuccess, isLoading } = useGetMessagesQuery(telenumber, {
		pollingInterval: 1000,
		skipPollingIfUnfocused: true,
	})

	const messagesEndRef = useRef(null)

	isSuccess && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })

	return isLoading ? (
		<ChatListSkelton />
	) : (
		<div className='p-4 flex flex-col justify-end gap-5 min-h-full'>
			{data.messages.map(message => (
				<MessageTile
					key={message.sid}
					message={message}
					isLoading={isLoading}
				/>
			))}
			<div ref={messagesEndRef} />
		</div>
	)
}

export default ChatList
