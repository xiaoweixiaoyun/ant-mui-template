import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/fixAmountResultConfirm', p, true);

export const updateList = (p: any) =>
	new HttpService().post('/fixAmountResultConfirm', p, true);
