import { Request } from './request';
import Routes from '../routes';

export class GetCharacterByName extends Request {

    constructor(name: string) {
        const url = `${Routes.characterByName}${name}`;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}