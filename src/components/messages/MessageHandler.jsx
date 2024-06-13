import axios from 'axios'
import { useState } from 'react'

function MessageHandler() {
	const [message, setMessage] = useState('')
	const handleSendMessage = async () => {
		try {
			if (message !== '') {
				const { data } = await axios.post(
					`https://api.twilio.com/2010-04-01/AC1b662ed8dae5c579ef3518661ce79935/Messages.json`,
					{
						From: 'whatsapp:+14155238886',
						body: message,
						To: 'whatsapp:+917994507560',
					},
					{ headers: { Authorization: '693cf15903fbdea83dd938d085a04d01' } }
				)
				console.log(data)
			}
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div className='absolute w-full bottom-0 p-5 flex gap-4 bg-slate-300'>
			<input
				type='text'
				value={message}
				onChange={e => setMessage(e.target.value)}
				className='w-full outline-none rounded p-1'
			/>
			<div
				onClick={handleSendMessage}
				className='px-3 cursor-pointer rounded bg-white flex justify-center items-center'
			>
				<i className='fa-solid text-cyan-500 fa-paper-plane'></i>
			</div>
		</div>
	)
}

export default MessageHandler
