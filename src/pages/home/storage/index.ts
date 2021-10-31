import { Executor } from '../../../factory/executor';
import { GetCharacteres, GetMultipleCharacteres, GetCharacterByName } from '../../../factory/requests';

interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: [string],
    url: string,
    created: string,
}

interface GetCharactersLimitProp {
    info: {
        pages: number
    },
    results: [Character]
}

type GetCharactersProp = Promise<[Character]>

export class StorageHome {

    static getCharacteres(id: number): Promise<GetCharactersLimitProp> {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacteres(id))
                .then(res => resolve(res.data))
                .catch(() => reject());
        })
    }

    static getMultipleCharacteres(id: number[]): GetCharactersProp {
        return new Promise((resolve, reject) => {
            if (!id.length) return reject();
            let ids = id.join();
            Executor.run(new GetMultipleCharacteres(ids))
                .then(res => {
                    let data = res.data
                    if (data.length == undefined) data = [data];
                    resolve(data)
                })
                .catch(err => reject(err.response));
        })
    }

    static getByName(name: string): GetCharactersProp {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacterByName(name))
                .then(res => resolve(res.data.results))
                .catch(() => reject());
        })
    }
}