import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/listMtMailItem', p, true);

export const download = (p: any) =>
	new HttpService().download('/listMtMailItem/downloadCSV', p, true);
