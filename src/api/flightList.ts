import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/mailGlance', p, true);

export const download = (p: any) =>
	new HttpService().download('/mailGlance/downloadCSV', p, true);
