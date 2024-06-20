import Contacts from '../Contacts/Contacts'
import SearchBar from '../SearchBar/SearchBar'
import Logout from '../../assets/svgs/login.svg'

function Conversations() {
	return (
		<div className='w-[342px] bg-[#EFEFEF] flex flex-col p-2 gap-2 max-h-screen fixed top-0'>
			<div className='sticky top-0 z-50'>
				<div className='flex justify-between items-center py-4 px-2'>
					<h1 className='font-semibold capitalize'>Conversations</h1>
					<button>
						<img src={Logout} alt='logout' />
					</button>
				</div>
				<SearchBar />
			</div>
			<hr />
			<Contacts />
		</div>
	)
}

export default Conversations
