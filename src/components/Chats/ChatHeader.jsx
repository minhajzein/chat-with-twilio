import { useParams } from 'react-router-dom'
import ProfileCircle from '../../assets/svgs/profile-circle.svg'

function ChatHeader() {
	const { telenumber } = useParams()

	return (
		<div className='w-full sticky top-0 z-50 bg-white shadow p-5 flex items-center gap-2'>
			<div className='bg-violet-600 size-14 flex justify-center items-center rounded-xl'>
				<img className='size-[50%]' src={ProfileCircle} alt='profile-picture' />
			</div>
			<h1 className='font-semibold text-xl capitalize'>{telenumber}</h1>
		</div>
	)
}

export default ChatHeader
