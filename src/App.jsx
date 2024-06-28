import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactRouter from './routes/ContactRouter'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
  
//imports................................................................................................................................................................

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<ContactRouter />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</Provider>
	)
}

export default App
