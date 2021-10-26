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

    get url() {
        return this._url;
    }

    get method() {
        return this._method;
    }

    get header() {
        return this._header;
    }

    get params() {
        return this._params;
    }
}