import { Executor } from '../../../factory/executor';
import { GetCharacteres } from '../../../factory/requests';

export class StorageHome {

    static getCharacteres(id: number): any {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacteres(id))
                .then(res => resolve(res.data.results))
                .catch(err => reject(err.response));
        })
    }
}