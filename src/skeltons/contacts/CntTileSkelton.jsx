import ProfileCircle from '../../assets/svgs/profile-circle.svg'

//imports................................................................................................................................................................................................

function CntTileSkelton() {
	return (
		<div className='w-full border-b border-gray-300 p-1 animate-pulse'>
			<div className='flex gap-2 justify-between w-full cursor-pointer items-center rounded-md hover:bg-[#CCCCCC] p-2'>
				<div className='bg-gray-400 size-12 flex justify-center items-center rounded-xl'>
					<img
						className='size-[50%]'
						src={ProfileCircle}
						alt='profile-picture'
					/>
				</div>
				<div className='flex flex-col gap-1 w-[50%]'>
					<div className='truncate p-2 bg-gray-300 w-full rounded'></div>
					<h4 className='opacity-50 p-1 bg-gray-300 truncate'></h4>
				</div>
				<div className='flex flex-col gap-1 items-center w-[10%]'>
					<h3 className='p-1 bg-gray-300 w-full'></h3>
				</div>
			</div>
		</div>
	)
}

export default CntTileSkelton
