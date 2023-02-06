import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/common.scss';
import './assets/loading.scss';
import './assets/mui.scss';
import { HashRouter as Router } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import './i18n/config';
import THEME from './theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme={THEME}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</ThemeProvider>
);
