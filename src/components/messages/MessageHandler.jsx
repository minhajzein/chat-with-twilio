import { useState } from 'react'
import SendIcon from '../../assets/svgs/send-icon.svg'
import Smiley from '../../assets/svgs/Smiley.svg'
import axios from 'axios'

//imports........................................

function MessageHandler() {
	const [message, setMessage] = useState('')

	const handleSendMessage = async () => {
		try {
			const { data } = await axios.post(
				'https://api.twilio.com/2010-04-01/Accounts/AC79d287e0d27809e3f14db0daa3a7c49f/Messages.json',
				{
					body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
					from: 'whatsapp:+14122593961',
					to: 'whatsapp:+917356986777',
				},
				{
					headers: {
						Authorization: 'aea50999e33499f0ae09402ccde7a238',
					},
				}
			)
			console.log(data)
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
