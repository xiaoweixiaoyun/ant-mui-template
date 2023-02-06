import { HttpService } from '../service/Http';

export const findList = (p: any) => new HttpService().get('/appended', p, true);

export const download = (p: any) =>
	new HttpService().download('/appended/downloadCSV', p, true);

export const uploadFmt = (p: any) =>
	new HttpService().downloadPost('/appended/fmtImport', p, true);

export const updateList = (p: any) =>
	new HttpService().put('/appended', p, true);

export const exportFmt = (p: any) =>
	new HttpService().download('/appended/fmtExport', p, true);
