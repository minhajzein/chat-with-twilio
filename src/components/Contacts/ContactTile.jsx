import React from 'react'

function ContactTile() {
	return (
		<div className='w-full flex gap-2 justify-between cursor-pointer border-b py-1'>
			<div className='bg-violet-600 size-12 flex justify-center items-center rounded-xl'>
				<i className='fa-regular fa-user text-white text-xl'></i>
			</div>
			<div className='flex flex-col gap-1 w-[50%]'>
				<h3 className=''>+987 078 909</h3>
				<h4 className='opacity-50 truncate'>lkadsjf adlsfj dasfasdf asdfadf</h4>
			</div>
			<div className='flex flex-col gap-1 items-center'>
				<h3>Monday</h3>
				<div className='bg-red-500 px-3 rounded-lg'>2</div>
			</div>
		</div>
	)
}

export default ContactTile
