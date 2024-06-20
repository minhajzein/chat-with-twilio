import SearchIcon from '../../assets/svgs/search-normal.svg'

function SearchBar() {
	return (
		<div className='w-full px-2 relative'>
			<img
				className='absolute top-1/2 -translate-y-1/2 left-6'
				src={SearchIcon}
				alt='search'
			/>
			<input
				className='w-full text-xs p-3 pl-8 outline-none rounded'
				type='search'
				placeholder='search'
			/>
		</div>
	)
}

export default SearchBar
