import React, { useEffect } from 'react'
import MessageTile from '../messages/MessageTile'
import axios from 'axios'

function ChatList() {
	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get(
					`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_SID}.json`
				)
				console.log(data)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [])
	return (
		<div className='p-2'>
			<MessageTile />
		</div>
	)
}

export default ChatList
