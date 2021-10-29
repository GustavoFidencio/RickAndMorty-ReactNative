import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, SafeAreaView } from "react-native";

import { Icon } from "../../helpers";
import Colors from '../../assets/colors';
import { StorageModal } from './storage';
import { Items, ItemEpisode } from './commons';
import {
    Image,
    Center,
    LabelInfo,
    Container,
    GoBackBar,
    LabelName,
    LabelFavorite,
    ContainerItems,
    ContainerLabels,
    ContainerButton,
    TouchableFavorite,
    ContainerCharacter,
} from './styles';

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

export const CharacterModal: React.FC = ({ route }) => {

    const { id } = route.params;

    const [isLoad, setLoad] = useState(true);
    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        _getCharacter()
    }, []);

    const _getCharacter = () => {
        StorageModal.getCharacter(id)
            .then(res => setCharacter(res))
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoad(false))
    }

    return (
        <Container>
            <Center>
                {
                    isLoad ?
                        <ActivityIndicator size="large" color={Colors.primary} />
                        :
                        <>
                            <View style={{ flex: 1 }}>
                                <GoBackBar />
                                <ContainerCharacter>
                                    <Image
                                        resizeMode={'contain'}
                                        source={{ uri: character.image }}
                                    />
                                    <ContainerLabels>
                                        <LabelName>
                                            {character.name}
                                        </LabelName>
                                        <LabelInfo>
                                            Status {character.status}
                                        </LabelInfo>
                                        <LabelInfo>
                                            Especie {character.species}
                                        </LabelInfo>
                                    </ContainerLabels>
                                </ContainerCharacter>
                                <ContainerItems>
                                    <Items
                                        label={'Localização'}
                                        info={character.location.name}
                                    />
                                    <Items
                                        label={'Origem'}
                                        info={character.origin.name}
                                    />
                                    <Items
                                        label={'Gênero'}
                                        info={character.gender}
                                    />
                                </ContainerItems>
                                <ItemEpisode info={character.episode.length} />
                            </View>
                            <ContainerButton>
                                <TouchableFavorite
                                >
                                    <Icon
                                        size={22}
                                        name={'heart'}
                                        lib={'AntDesign'}
                                        color={Colors.background}
                                    />
                                    <LabelFavorite>
                                        Favoritar
                                    </LabelFavorite>
                                </TouchableFavorite>
                            </ContainerButton>
                        </>
                }
                <SafeAreaView style={{ flexGrow: 0 }} />
            </Center>
        </Container >
    )
}