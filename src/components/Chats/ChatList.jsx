import { useEffect, useState } from 'react'
import MessageTile from '../messages/MessageTile'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ChatListSkelton from '../../skeltons/ChatListSkelton'

function ChatList() {
	const [messages, setMessages] = useState([])
	const [loading, setLoading] = useState(true)
	const { telenumber } = useParams()

	useEffect(() => {
		;(async () => {
			const { data } = await axios.get(
				`http://drscentapi.grohance.co.in/api/messages/${telenumber}`
			)
			setMessages(data.messages)
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth',
			})
			setLoading(false)
		})()
	}, [telenumber])

	return loading ? (
		<ChatListSkelton />
	) : (
		<div className='p-4 flex flex-col justify-end gap-5 w-full min-h-screen overflow-y-auto hover:scroll-auto'>
			{messages.map(message => (
				<MessageTile key={message.sid} message={message} />
			))}
		</div>
	)
}

export default ChatList
