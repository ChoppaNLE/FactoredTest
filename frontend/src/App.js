import Login from './Login/Login'
import Main from './Main/Main'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login/>} />
					<Route path='Profiles' element={<Main/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
