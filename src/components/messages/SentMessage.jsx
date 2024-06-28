import Read from '../../assets/svgs/Read.svg'
import moment from 'moment'

//imports................................................................................................................................

function SentMessage({ date, body }) {
	const sentDate = date.split(' ')[0]
	const formattedDate = moment(sentDate.split('-')).from(new Date())

	return (
		<div className='w-full flex justify-end'>
			<div className='w-[50%] gap-1 relative bg-[#EFEFEF] p-5 pb-9 rounded-3xl rounded-br-none'>
				<p>{body}</p>
				<div className='absolute right-4 bottom-4 flex gap-1 items-center justify-center text-end'>
					<p className='opacity-50 text-sm'>{formattedDate}</p>
					<img src={Read} alt='read' />
				</div>
			</div>
		</div>
	)
}

export default SentMessage
