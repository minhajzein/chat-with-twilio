import { useEffect, useState } from 'react'
import ContactTile from './ContactTile'
import axios from 'axios'

//imports................................................................................................

function Contacts() {
	const [contacts, setContacts] = useState([])

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get(
					'http://drscentapi.grohance.co.in/api/contacts'
				)
				setContacts(data.contacts)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [])

	return (
		<div className='w-full overflow-y-auto z-50 scrollbar-hidden hover:scroll-auto'>
			{contacts.map(contact => (
				<ContactTile key={contact} telenumber={contact} />
			))}
		</div>
	)
}

export default Contacts
