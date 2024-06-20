import { Route, Routes } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'

function ContactRouter() {
	return (
		<Routes>
			<Route path='/:telenumber' element={<ChatPage />} />
		</Routes>
	)
}

export default ContactRouter
