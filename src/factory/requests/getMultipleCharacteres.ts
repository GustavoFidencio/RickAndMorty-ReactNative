import { Request } from './request';
import Routes from '../routes';

export class GetMultipleCharacteres extends Request {

    constructor(numbers: string) {
        const url = `${Routes.multipleCharacters}${numbers}`;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}