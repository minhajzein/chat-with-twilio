import { useGetContactsQuery } from '../../redux/apiSlices/contactApiSlice'
import ContactTile from './ContactTile'
import ContactsSkelton from '../../skeltons/contacts/ContactsSkelton'

//imports................................................................................................

function Contacts() {
	const { data, isLoading, isSuccess, isError } = useGetContactsQuery()

	// const contacts = data?.contacts.filter(contact =>
	// 	contact
	// 		.split(':')[1]
	// 		.search(/^(?:(?:+|0{0,2})91(s*[-]s*)?|[0]?)?[789]d{9}$/)
	// )
	// console.log(contacts)
	return isLoading ? (
		<ContactsSkelton />
	) : (
		<div className='w-full overflow-y-auto z-50 scrollbar-hidden hover:scroll-auto'>
			{isSuccess &&
				data?.contacts.map(contact => (
					<ContactTile key={contact} telenumber={contact} />
				))}
		</div>
	)
}

export default Contacts
