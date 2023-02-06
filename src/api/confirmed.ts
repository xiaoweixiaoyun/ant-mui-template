import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/actualProductionConfirm', p, true);

export const updateList = (p: any) =>
	new HttpService().post('/actualProductionConfirm', p, true);
