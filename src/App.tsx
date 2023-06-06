import { Route, Routes } from 'react-router-dom';
import st from './App.module.scss';
import MainPage from './pages/Mainpage';

function App() {
	return (
		<div className={st.app}>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/404' element={<MainPage />} />
			</Routes>
		</div>
	);
}

export default App;
