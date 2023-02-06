import { HttpService } from '../service/Http';

export const findList = (p: any) =>
	new HttpService().get('/distributionInstruction/search', p, true);

export const download = (p: any) =>
	new HttpService().download('/distributionInstruction/csvExport', p, true);

export const downloadPdf = (p: any) =>
	new HttpService().download('/distributionInstruction/pdfExport', p, true);
