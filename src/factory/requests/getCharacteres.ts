import { Request } from './request';
import Routes from '../routes';

export class GetCharacteres extends Request {

    constructor(id: number) {
        const url = `${Routes.characteres}${id}`;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}