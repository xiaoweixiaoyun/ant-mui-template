import { HttpService } from '../service/Http';

export const downloadCsv = (p: any) =>
	new HttpService().download('/fixAmountResultModify/csvExport', p, true);

export const findList = (p: any) =>
	new HttpService().get('/fixAmountResultModify/search', p, true);

export const downloadErrorFmt = (p: any) =>
	new HttpService().download('/fixAmountResultModify/errorFmtExport', p, true);

export const uploadFmt = (p: any) =>
	new HttpService().post('/fixAmountResultModify/fmtImport', p, true);

export const updateList = (p: any) =>
	new HttpService().post('/fixAmountResultModify/update', p, true);
