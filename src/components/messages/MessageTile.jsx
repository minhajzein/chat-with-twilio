const message = {}
import RecievedMessage from './RecievedMessage'
import SentMessage from './SentMessage'

function MessageTile() {
	return (
		<div className='w-full flex flex-col gap-5'>
			<RecievedMessage />
			<SentMessage />
		</div>
	)
}

export default MessageTile
