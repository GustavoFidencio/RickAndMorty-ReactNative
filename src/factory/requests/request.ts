import qs from 'qs';

export class Request {

    _url: string;
    _method: string;
    _header: Object;
    _params: Object;

    constructor(
        url: string,
        method: string,
        header: Object,
        params?: Object
    ) {
        this._url = url;
        this._method = method;
        this._header = header;
        this._params = params ? qs.stringify(params) : null;
    }

    get url(): string {
        return this._url;
    }

    get method(): string {
        return this._method;
    }

    get header(): Object {
        return this._header;
    }

    get params(): Object {
        return this._params;
    }
}