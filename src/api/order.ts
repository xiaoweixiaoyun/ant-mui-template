import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/orderStatus', p, true);

export const download = (p: any) =>
	new HttpService().download('/orderStatus/csv', p, true);
