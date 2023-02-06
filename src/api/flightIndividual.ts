import { HttpService } from '../service/Http';

export const download = (p: any) =>
	new HttpService().download('mtMailItem/downloadCSV', p, true);

export const findList = (p: any) =>
	new HttpService().get('/mtMailItem', p, true);

export const findUpdateList = (p: any) =>
	new HttpService().get('/mtMailItem/info', p);

export const updateInfo = (p: any) =>
	new HttpService().put('/mtMailItem', p, true);

export const deleteInfo = (p: any) =>
	new HttpService().delete('/mtMailItem', p);

export const downloadErrorFmt = (p: any) =>
	new HttpService().download('/mtMailItem/errorFmtExport', p, true);

export const uploadFmt = (p: any) =>
	new HttpService().post('/mtMailItem/fmt', p, true);

export const addInfo = (p: any) =>
	new HttpService().post('/mtMailItem/record', p, true);

export const recordCheck = (p: any) =>
	new HttpService().get('/mtMailItem/recordCheck', p, true);
