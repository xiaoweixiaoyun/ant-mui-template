import { HttpService } from '../service/Http';

export const findCenterName = (p: any) =>
	new HttpService().get('/mailBasicSetting/queryCenterName', p, true);

export const findFightBasicList = (p: any) =>
	new HttpService().get('/mailBasicSetting', p, true);

export const deleteInfo = (p: any) =>
	new HttpService().delete('/mailBasicSetting', p);

export const insertStore = (p: any) =>
	new HttpService().post('/mailBasicSetting', p, true);
