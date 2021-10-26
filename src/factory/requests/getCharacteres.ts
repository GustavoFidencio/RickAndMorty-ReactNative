import { Request } from './request';
import Routes from '../routes';

export class GetCharacteres extends Request {

    constructor() {
        const url = Routes.characteres;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}