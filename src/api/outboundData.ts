import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/issueCheckData', p, true);

export const download = (p: any) =>
	new HttpService().download('/issueCheckData/downloadCSV', p, true);
