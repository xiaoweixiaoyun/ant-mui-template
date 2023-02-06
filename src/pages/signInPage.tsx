import {
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Radio,
	RadioGroup,
	Typography
} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import {
	AccountCircle,
	Visibility,
	VisibilityOff,
	Lock
} from '@mui/icons-material';
import { findMenuList, login, userInfo } from '../api/login';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Md5 } from 'ts-md5';
interface State {
	userId: string;
	password: string;
	type: string;
	showPassword: boolean;
}
interface Menu {
	id: string;
	path?: string;
	element?: string;
	title: string;
	icon?: string;
	parentId: string | null;
	linkType: number;
}
export default function SignInPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [values, setValues] = React.useState<State>({
		userId: '',
		password: '',
		type: '1',
		showPassword: false
	});

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		});
	};
	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};
	const loginSubmit = () => {
		login(
			qs.stringify({
				userId: values.userId,
				password: Md5.hashStr(values.password),
				type: values.type
			})
		).then((data: any) => {
			Promise.all([findMenuList({}), userInfo({})]).then((result: any) => {
				let arr: Array<Menu> = [];
				result[0].forEach((element: any) => {
					let obj: Menu = {
						id: element.id,
						path: element.openUrl || '',
						element: element.routerPath || '',
						title: element.name || '',
						icon: element.icon || '',
						parentId: element.pid,
						linkType: element.openTypeid
					};
					arr.push(obj);
				});
				dispatch({ type: 'setMenuList', data: { menuList: arr } });
				dispatch({ type: 'setUserInfo', data: { userInfo: result[1] } });
				navigate('/', { replace: true });
			});
		});
	};

	return (
		<div className='login-layout layout'>
			<Card
				sx={{
					maxWidth: 430,
					padding: 5,
					height: 450,
					borderRadius: '20px',
					margin: 'auto',
					border: '2px solid #fff',
					background: 'rgba(255, 255, 255, 0.7)',
					boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.14)'
				}}
			>
				<CardHeader
					sx={{ textAlign: 'center', padding: '2 5' }}
					title={
						<p>
							<span
								style={{ color: '#141414', fontSize: '44px', fontWeight: 700 }}
							>
								Central
							</span>
							<span
								style={{ color: '#173A76', fontSize: '44px', fontWeight: 700 }}
							>
								Kitchen
							</span>
						</p>
					}
				/>
				<CardContent>
					<form>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography
									sx={{
										fontSize: 18,
										fontFamily: 'PingFang SC',
										fontWeight: 600,
										color: '#434343'
									}}
								>
									Username
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth variant='outlined'>
									<OutlinedInput
										value={values.userId}
										onChange={handleChange('userId')}
										startAdornment={
											<InputAdornment position='start'>
												<AccountCircle />
											</InputAdornment>
										}
										inputProps={{
											'aria-label': 'weight'
										}}
										sx={{ background: '#fff' }}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Typography
									sx={{
										fontSize: 18,
										fontFamily: 'PingFang SC',
										fontWeight: 600,
										color: '#434343'
									}}
								>
									Password
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth variant='outlined'>
									<OutlinedInput
										type={values.showPassword ? 'text' : 'password'}
										value={values.password}
										name='password'
										onChange={handleChange('password')}
										startAdornment={
											<InputAdornment position='start'>
												<Lock />
											</InputAdornment>
										}
										endAdornment={
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge='end'
												>
													{values.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										}
										sx={{ background: '#fff' }}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<RadioGroup
										row
										aria-labelledby='demo-row-radio-buttons-group-label'
										name='row-radio-buttons-group'
										value={values.type}
										onChange={handleChange('type')}
									>
										<FormControlLabel
											value='1'
											control={<Radio />}
											label='トライアルグループ'
										/>
										<FormControlLabel
											value='2'
											control={<Radio />}
											label='お取引先様'
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
							<Grid item xs={12} sx={{ marginTop: 4 }}>
								<Button
									variant='contained'
									size='large'
									fullWidth
									sx={{ background: '#173A76', fontSize: '18px' }}
									onClick={loginSubmit}
								>
									Login
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
