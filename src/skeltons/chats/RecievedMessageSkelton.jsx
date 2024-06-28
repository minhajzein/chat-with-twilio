import ProfileCircle from '../../assets/svgs/profile-circle.svg'

//imports................................................................................................

function RecievedMessageSkelton() {
	return (
		<div className='w-full flex justify-start'>
			<div className='min-w-[60%] h-auto flex items-end gap-2'>
				<div className='bg-violet-600 size-12 flex justify-center items-center rounded-xl'>
					<img
						className='size-[50%]'
						src={ProfileCircle}
						alt='profile-picture'
					/>
				</div>
				<div className='flex w-[80%] flex-col gap-1 relative bg-[#EFEFEF] p-5 pb-9 rounded-3xl rounded-bl-none'>
					<p className='p-1 w-full bg-gray-300 rounded'></p>
					<p className='p-1 w-full bg-gray-300 rounded'></p>
					<p className='p-1 w-full bg-gray-300 rounded'></p>
					<p className='p-1 w-full bg-gray-300 rounded'></p>
					<p className='p-1 w-full bg-gray-300 rounded'></p>
					<p className='p-1 w-full bg-gray-300 rounded'></p>
					<span className='absolute right-4 bottom-4 text-sm opacity-50 p-1 w-[20%] rounded bg-gray-300 text-end'></span>
				</div>
			</div>
		</div>
	)
}

export default RecievedMessageSkelton
