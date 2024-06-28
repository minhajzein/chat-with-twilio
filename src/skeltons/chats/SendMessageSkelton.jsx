import Read from '../../assets/svgs/Read.svg'

//imports................................................................

function SendMessageSkelton() {
	return (
		<div className='w-full flex justify-end'>
			<div className='w-[50%] gap-1 relative animate-pulse bg-[#EFEFEF] p-5 flex flex-col pb-9 rounded-3xl rounded-br-none'>
				<p className='p-1 w-full bg-gray-300 rounded'></p>
				<p className='p-1 w-full bg-gray-300 rounded'></p>
				<p className='p-1 w-full bg-gray-300 rounded'></p>
				<p className='p-1 w-full bg-gray-300 rounded'></p>
				<p className='p-1 w-full bg-gray-300 rounded'></p>
				<p className='p-1 w-full bg-gray-300 rounded'></p>
				<div className='absolute right-4 bottom-4 flex gap-1 items-center w-full justify-end text-end'>
					<p className='opacity-50 text-sm p-1 bg-gray-300 w-[20%] rounded'></p>
					<img src={Read} alt='read' />
				</div>
			</div>
		</div>
	)
}

export default SendMessageSkelton
