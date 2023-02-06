import Logo from './logo';
import Menu from './menu';
import Nav from './nav';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

export default function Layout() {
	const { open } = useSelector((state: RootState) => ({
		open: state.Expansion.open
	}));
	return (
		<div className='layout'>
			<div
				className={classNames('left-layout', open ? '' : 'left-layout-active')}
			>
				<Logo />
				<Menu />
			</div>
			<div className='right-layout'>
				<Nav />
				<div className='ck-content'>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
}
