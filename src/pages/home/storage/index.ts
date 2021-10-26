import { Executor } from '../../../factory/executor';
import { GetCharacteres } from '../../../factory/requests';

export class StorageHome {

    static getCharacteres() {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacteres())
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }

}