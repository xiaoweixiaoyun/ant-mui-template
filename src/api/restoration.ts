import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/actualProductionRecovery', p, true);

export const restoration = (p: any) =>
	new HttpService().post('/actualProductionRecovery', p, true);
