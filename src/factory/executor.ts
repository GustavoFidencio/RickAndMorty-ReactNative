import axios from 'axios';

export class Executor {

    static run(
        Request: {
            method: string,
            header: Object,
            url: string,
            params?: Object
        }
    ) {
        return axios({
            method: Request.method,
            header: Request.header,
            url: Request.url,
            data: Request.params
        });
    }
}