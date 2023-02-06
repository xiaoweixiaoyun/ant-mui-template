import { HttpService } from '../service/Http';

export const login = (p: any) => new HttpService().post('/login', p);

export const userInfo = (p: any) => new HttpService().get('/userInfo', p);

export const findMenuList = (p: any) => new HttpService().get('/mtMenu', p);
