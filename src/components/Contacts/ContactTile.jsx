import { NavLink } from 'react-router-dom'
import ProfileCircle from '../../assets/svgs/profile-circle.svg'

//imports................................................................................................................................

function ContactTile({ telenumber }) {
	const number = telenumber.split(':')[1]
	return (
		<div className='w-full border-b border-gray-300 p-1'>
			<NavLink
				to={`/${number}`}
				className={({ isActive }) =>
					`${
						isActive && 'bg-[#CCCCCC]'
					} flex gap-2 justify-between w-full cursor-pointer items-center rounded-md hover:bg-[#CCCCCC] p-2`
				}
			>
				<div className='bg-violet-600 size-12 flex justify-center items-center rounded-xl'>
					<img
						className='size-[50%]'
						src={ProfileCircle}
						alt='profile-picture'
					/>
				</div>
				<div className='flex flex-col gap-1 max-w-[50%]'>
					<h3 className='truncate'>{number}</h3>
					<h4 className='opacity-50 truncate'>
						lkadsjf adlsfj dasfasdf asdfadf
					</h4>
				</div>
				<div className='flex flex-col gap-1 items-center'>
					<h3 className='text-[#34B7F1]'>Monday</h3>
					<div className='bg-[#34B7F1] px-3 text-white rounded-lg'>2</div>
				</div>
			</NavLink>
		</div>
	)
}

export default ContactTile
