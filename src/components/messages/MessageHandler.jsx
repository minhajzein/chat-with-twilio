import { useState } from 'react'
import SendIcon from '../../assets/svgs/send-icon.svg'
import Smiley from '../../assets/svgs/Smiley.svg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//imports........................................

function MessageHandler() {
	const [message, setMessage] = useState('')
	const { telenumber } = useParams()
	const handleSendMessage = async () => {
		try {
			if (message !== '') {
				const { data } = await axios.post(
					'http://drscentapi.grohance.co.in/api/send',
					{
						body: message,
						to: telenumber,
					}
				)
				if (data.success) {
					setMessage('')
				}
			}
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div className='sticky w-full bottom-0 p-10 flex gap-4 z-50 bg-[#EAEAEA]'>
			<div className='w-full relative'>
				<button className='absolute left-3 top-1/2 -translate-y-1/2'>
					<img src={Smiley} alt='smiley' />
				</button>
				<input
					type='text'
					value={message}
					placeholder='Type your message'
					onChange={e => setMessage(e.target.value)}
					className='w-full outline-none rounded py-2 px-12'
				/>
			</div>
			<button
				onClick={handleSendMessage}
				className='px-3 rounded bg-white flex justify-center items-center'
			>
				<img src={SendIcon} alt='send' />
			</button>
		</div>
	)
}

export default MessageHandler
