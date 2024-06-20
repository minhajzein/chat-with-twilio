import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactRouter from './routes/ContactRouter'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<ContactRouter />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
