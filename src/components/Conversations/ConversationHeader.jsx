import SearchBar from '../SearchBar/SearchBar'
import Logout from '../../assets/svgs/login.svg'

//imports...................................................................

function ConversationHeader() {
	return (
		<div className='sticky top-0 z-50 w-full'>
			<div className='flex justify-between items-center py-4 px-2'>
				<h1 className='font-semibold capitalize'>Conversations</h1>
				<button>
					<img src={Logout} alt='logout' />
				</button>
			</div>
			<SearchBar />
		</div>
	)
}

export default ConversationHeader
