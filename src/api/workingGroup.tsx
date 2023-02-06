import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/workGroup', p, true);

export const updateInfo = (p: any) =>
	new HttpService().put('/workGroup', p, true);

export const deleteInfo = (p: any) =>
	new HttpService().delete('/workGroup', p, true);

export const findInfo = (p: any) => new HttpService().get('/workGroup/info', p);

export const download = (p: any) =>
	new HttpService().download('/workGroup/csvDownload', p, true);

export const insertBigGroup = (p: any) =>
	new HttpService().post('/workGroup/bigGroup', p);

export const insertSmallGroup = (p: any) =>
	new HttpService().post('/workGroup/smallGroup', p);
