import { Request } from './request';
import Routes from '../routes';

export class GetCharacter extends Request {

    constructor(id: number) {
        const url = `${Routes.character}${id}`;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}