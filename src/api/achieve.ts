import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/getActualProduction', p, true);

export const updateList = (p: any) =>
	new HttpService().post('/getActualProduction', p, true);
