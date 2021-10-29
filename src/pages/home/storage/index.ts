import { Executor } from '../../../factory/executor';
import { GetCharacteres, GetMultipleCharacteres } from '../../../factory/requests';

export class StorageHome {

    static getCharacteres(id: number): any {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacteres(id))
                .then(res => resolve(res.data.results))
                .catch(err => reject(err.response));
        })
    }


    static getMultipleCharacteres(id: [number]): any {
        let data = id.join();
        return new Promise((resolve, reject) => {
            Executor.run(new GetMultipleCharacteres(data))
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }
}