import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Expansion from './expansion';
import React, { useEffect } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText
} from '@mui/material';
import { removeToken } from '../utils/Token';
import { useLocation } from 'react-router-dom';
import { RouterFilter } from '../router/config';

export default function Nav() {
	const [linkList, setLinkList] = React.useState<any>([]);
	const location = useLocation();
	useEffect(() => {
		setLinkList(RouterFilter(location.pathname));
	}, [location]);
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const refresh = () => {
		window.location.reload();
	};
	const logout = () => {
		removeToken();
		setOpen(false);
		refresh();
	};
	const renderNav = () => {
		return (
			<Breadcrumbs aria-label='breadcrumb'>
				{linkList.map((item: any, index: any) => {
					return (
						<Link
							key={'nav_' + index}
							underline='hover'
							sx={{
								display: 'flex',
								alignItems: 'center',
								fontSize: '14px',
								cursor: 'pointer'
							}}
							color={index === 0 ? 'inherit' : 'text.primary'}
							onClick={() => {
								refresh();
							}}
						>
							{item.title}
						</Link>
					);
				})}
			</Breadcrumbs>
		);
	};
	return (
		<div className='ck-nav'>
			<Expansion />
			<div className='ck-breadcrumbs'>{renderNav()}</div>
			<div className='ck-right'>マニュアルはこちら</div>
			<div className='ck-right ck-logout' onClick={handleClickOpen}>
				ログアウト
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='responsive-dialog-title'
			>
				<DialogContent>
					<DialogContentText>
						システムを終了することを確認しますか。確認ボタンをクリックして終了します。
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						使用を続行
					</Button>
					<Button onClick={logout} autoFocus variant='contained'>
						確認
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
