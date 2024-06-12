import Contacts from '../Contacts/Contacts'
import SearchBar from '../SearchBar/SearchBar'

function Conversations() {
	return (
		<div className='w-[342px] bg-slate-300 flex flex-col p-2 gap-2 max-h-screen fixed top-0'>
			<div className='sticky top-0 bg-slate-300 z-50'>
				<div className='flex justify-between items-center py-4'>
					<h1 className='font-semibold capitalize'>Conversations</h1>
					<i className='fa-solid fa-right-from-bracket cursor-pointer text-red-600'></i>
				</div>
				<SearchBar />
			</div>
			<hr />
			<Contacts />
		</div>
	)
}

export default Conversations
