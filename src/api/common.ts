import { HttpService } from '../service/Http';

export const findLineList = (p: any) =>
	new HttpService().get('/common/lineList', p);

export const findCenterList = (p: any) =>
	new HttpService().get('/common/centerList', p);

export const findAllLineList = (p: any) =>
	new HttpService().get('/common/lineAllList', p);

export const findBigGroupList = (p: any) =>
	new HttpService().get('/common/bigGroupList', p);

export const findMailList = (p: any) =>
	new HttpService().get('/common/mailList', p);

export const findWorkGroupList = (p: any) =>
	new HttpService().get('/common/workGroupList', p);

export const downloadFmt = (p: any) =>
	new HttpService().download('/file/downloadFmt', p);

export const findPlaceList = (p: any) =>
	new HttpService().get('/common/placeList', p);

export const findStoreList = (p: any) =>
	new HttpService().get('/common/branchList', p);

export const findItemName = (p: any) =>
	new HttpService().get('/common/itemName', p);

export const findStoreName = (p: any) =>
	new HttpService().get('/common/storeName', p);
