import { useParams } from 'react-router-dom'
import RecievedMessage from './RecievedMessage'
import SentMessage from './SentMessage'
import ChatListSkelton from '../../skeltons/chats/ChatListSkelton'

function MessageTile({ message, isLoading }) {
	const { telenumber } = useParams()

	const number = message.to.split(':')[1]

	return isLoading ? (
		<ChatListSkelton />
	) : (
		<div className='w-full flex flex-col gap-5'>
			{number === telenumber ? (
				<SentMessage date={message.dateSent} body={message.body} />
			) : (
				<RecievedMessage date={message.dateSent} body={message.body} />
			)}
		</div>
	)
}

export default MessageTile
