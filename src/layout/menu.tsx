import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Icon from '@mui/material/Icon';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { handleTree } from '../utils/Tool';

const renderMenuData = (data: any, pathname: string) => {
	const getBackGround = (path: string) => {
		let pathNew = path.split('/:')[0];
		if (pathname.indexOf(pathNew) > -1 && pathNew !== '') {
			return '#051c44';
		} else {
			return '';
		}
	};
	return data.map((item: any, index: any) => {
		const [open, setOpen] = React.useState(true);
		const handleClick = () => {
			setOpen(!open);
		};
		if (item.children) {
			return (
				<div key={index}>
					<ListItemButton
						onClick={handleClick}
						sx={{
							minHeight: 42,
							color: '#fff'
						}}
					>
						<ListItemIcon sx={{ color: '#fff' }}>
							<Icon>{item.icon}</Icon>
						</ListItemIcon>
						<ListItemText primary={item.title} />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout='auto' sx={{ pl: 2 }}>
						<List component='div' disablePadding>
							{renderMenuData(item.children, pathname)}
						</List>
					</Collapse>
				</div>
			);
		}
		if (item.linkType === 1) {
			return (
				<ListItemButton
					component={Link}
					key={item.path}
					to={item.path}
					sx={{
						minHeight: 42,
						color: '#fff',
						background: getBackGround(item.path)
					}}
				>
					<ListItemIcon sx={{ color: '#fff' }}>
						<Icon>{item.icon}</Icon>
					</ListItemIcon>
					<ListItemText primary={item.title} />
				</ListItemButton>
			);
		} else {
			return (
				<ListItemButton
					key={item.path}
					href={item.path}
					target='_blank'
					sx={{
						minHeight: 42,
						color: '#fff'
					}}
				>
					<ListItemIcon sx={{ color: '#fff' }}>
						<Icon>{item.icon}</Icon>
					</ListItemIcon>
					<ListItemText primary={item.title} />
				</ListItemButton>
			);
		}
	});
};

export default function Menu() {
	const { pathname } = useLocation();
	const { menuList } = useSelector((state: RootState) => {
		let obj = JSON.parse(JSON.stringify(state.Menu.menuList));
		return {
			menuList: handleTree(obj, 'id', 'parentId', 'children', true)
		};
	});

	return (
		<div className='ck-menu'>
			<List sx={{ width: '100%', bgcolor: '#173A76' }} component='nav'>
				{renderMenuData(menuList, pathname)}
			</List>
		</div>
	);
}
