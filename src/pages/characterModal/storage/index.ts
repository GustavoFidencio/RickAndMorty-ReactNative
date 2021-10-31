import { Executor } from '../../../factory/executor';
import { GetCharacter } from '../../../factory/requests';

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

type GetCharactersProp = Promise<Character>

export class StorageModal {

    static getCharacter(id: number): GetCharactersProp {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacter(id))
                .then(res => resolve(res.data))
                .catch(() => reject());
        })
    }
}