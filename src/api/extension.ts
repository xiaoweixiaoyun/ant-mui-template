import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/extensionPlan', p, true);

export const retention = (p: any) =>
	new HttpService().put('/extensionPlan', p, true);
