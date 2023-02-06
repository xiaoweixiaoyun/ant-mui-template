import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/productionInstruction/search', p, true);

export const download = (p: any) =>
	new HttpService().download('/productionInstruction/csvExport', p, true);

export const downloadPdf = (p: any) =>
	new HttpService().download('/productionInstruction/pdfExport', p, true);

export const saveSearchParam = (p: any) =>
	new HttpService().post('/productionInstruction/saveSearchParam', p, true);

export const getAutoPrintNumList = (p: any) =>
	new HttpService().get('/productionInstruction/getAutoPrintNumList', p);

export const findSearchList = (p: any) =>
	new HttpService().get('/productionInstruction/searchParam', p, true);
