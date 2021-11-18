import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext';
import '@styles/global.css';
import useInitialState from '@hooks/useInitialState';


const App = () => {
	const initialState = useInitialState()
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/`} element={<Home/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/login`}element={<Login/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/password-recovery`} element={<PasswordRecovery/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/send-email`}element={<SendEmail/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/new-password`} element={<NewPassword/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/account`} element={<MyAccount/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/signup`} element={<CreateAccount/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/checkout`} element={<Checkout/>} />
						<Route path={`${process.env.PROJECT_NAME ? `${process.env.BASE_PATH}` : ''}/orders`} element={<Orders/>} />
						<Route path="*" element={<NotFound/>} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
