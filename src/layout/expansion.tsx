import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useSelector, useDispatch } from 'react-redux';

export default function Expansion() {
	const dispatch = useDispatch();

	const { open } = useSelector((state: RootState) => ({
		open: state.Expansion.open
	}));

	const change = () => {
		dispatch({ type: 'expansion' });
	};

	return (
		<div className='ck-expansion'>
			<Button onClick={change}>
				<Icon>{open ? 'menu_close' : 'menu_open'}</Icon>
			</Button>
		</div>
	);
}
