import Contacts from '../Contacts/Contacts'
import ConversationHeader from './ConversationHeader'

//imports...........................................................................................

function Conversations() {
	return (
		<div className='w-[342px] bg-[#EFEFEF] flex flex-col p-2 gap-2 max-h-screen fixed top-0'>
			<ConversationHeader />
			<hr />
			<Contacts />
		</div>
	)
}

export default Conversations
