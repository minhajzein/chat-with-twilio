import ProfileCircle from '../../assets/svgs/profile-circle.svg'

function RecievedMessage({ date, body }) {
	return (
		<div className='w-full flex justify-start'>
			<div className='max-w-[60%] h-auto flex items-end gap-2'>
				<div className='bg-violet-600 size-12 flex justify-center items-center rounded-xl'>
					<img
						className='size-[50%]'
						src={ProfileCircle}
						alt='profile-picture'
					/>
				</div>
				<div className='flex max-w-[80%] flex-col gap-1 relative bg-[#EFEFEF] p-5 pb-9 rounded-3xl rounded-bl-none'>
					<p>{body}</p>
					<span className='absolute right-4 bottom-4 text-sm opacity-50 w-full text-end'>
						{date}
					</span>
				</div>
			</div>
		</div>
	)
}

export default RecievedMessage
