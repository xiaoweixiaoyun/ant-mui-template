import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/userMaster', p, true);

export const addInfo = (p: any) => new HttpService().post('/userMaster', p);

export const updateInfo = (p: any) => new HttpService().put('/userMaster', p);

export const deleteInfo = (p: any) =>
	new HttpService().delete('/userMaster', p);

export const findInfo = (p: any) =>
	new HttpService().get('/userMaster/info', p);

export const findUserName = (p: any) =>
	new HttpService().get('/userMaster/userName', p, true);

export const download = (p: any) =>
	new HttpService().download('/userMaster/csvDownload', p, true);
