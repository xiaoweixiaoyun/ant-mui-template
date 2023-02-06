import { createTheme } from '@mui/material/styles';
import { jaJP } from '@mui/material/locale';
import Transitions from './transitions';
import Typography from './typography';
import Components from './components';

const THEME = createTheme(
	{
		transitions: Transitions,
		typography: Typography,
		components: Components
	},
	jaJP
);
export default THEME;
