import React from 'react'
import Read from '../../assets/svgs/Read.svg'
//imports................................................................................................................................

function SentMessage() {
	return (
		<div className='w-full flex justify-end'>
			<div className='w-[50%] gap-1 relative bg-[#EFEFEF] p-5 pb-8 rounded-3xl rounded-br-none'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
					ipsam harum maxime odit corporis ratione ut, molestias cupiditate
					corrupti perferendis laborum quisquam quia quis repellendus
					voluptates. Maxime corrupti sapiente suscipit.
				</p>
				<div className='absolute right-4 bottom-4 flex gap-1 items-center justify-center text-end'>
					<p className='opacity-50 text-sm'>04:43</p>
					<img src={Read} alt='read' />
				</div>
			</div>
		</div>
	)
}

export default SentMessage
