import { Link } from '@mui/material';
import { getToken } from '../utils/Token';

export default function NotFoundPage() {
	return (
		<div className='notFind'>
			<Link
				underline='hover'
				sx={{
					fontSize: '18px',
					cursor: 'pointer'
				}}
				color={'#fff'}
				href='/'
			>
				ログイン
			</Link>
		</div>
	);
}
