import { Executor } from '../../../factory/executor';
import { GetCharacter } from '../../../factory/requests';

export class StorageModal {

    static getCharacter(id: number): any {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacter(id))
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }
}