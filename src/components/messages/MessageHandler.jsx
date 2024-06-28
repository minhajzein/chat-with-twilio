import { useState } from 'react'
import SendIcon from '../../assets/svgs/send-icon.svg'
import Smiley from '../../assets/svgs/Smiley.svg'
import { useParams } from 'react-router-dom'
import { useSendMessageMutation } from '../../redux/apiSlices/messageApiSlice'
import { toast } from 'react-toastify'

//imports........................................

function MessageHandler() {
	const [message, setMessage] = useState('')
	const { telenumber } = useParams()
	const [sendMessage, { isLoading, isSuccess }] = useSendMessageMutation()
	const handleSendMessage = async e => {
		e.preventDefault()
		try {
			if (message !== '') {
				const { data } = await sendMessage({
					body: message,
					to: telenumber,
				})
				if (data.success) {
					setMessage('')
				}
			} else {
				toast.error('please type a message')
			}
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<form
			onSubmit={handleSendMessage}
			className='w-full sticky bottom-0 p-10 flex gap-4 z-50 bg-[#EAEAEA]'
		>
			<div className='w-full relative'>
				<button
					type='button'
					className='absolute left-3 top-1/2 -translate-y-1/2'
				>
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
				disabled={isLoading}
				className='px-3 rounded bg-white flex justify-center items-center'
			>
				<img src={SendIcon} alt='send' />
			</button>
		</form>
	)
}

export default MessageHandler
