import Login from './Login/Login'
import Main from './Main/Main'
import NotFound from './Common/NotFound'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='Profiles' element={<Main />} />
					<Route path='*' element={<NotFound />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
