import ContactTile from './ContactTile'
const contacts = [
	{ telenumber: '+91 9563433245', username: 'John', messages: [], avatar: '' },
]

//imports................................................................................................

function Contacts() {
	return (
		<div className='w-full overflow-y-auto z-50 scrollbar-hidden hover:scroll-auto'>
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
			<ContactTile />
		</div>
	)
}

export default Contacts
