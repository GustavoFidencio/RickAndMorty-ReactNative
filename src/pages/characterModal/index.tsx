import { connect } from 'react-redux';
import React, { useState, useEffect, useRef } from "react";
import { View, ActivityIndicator, SafeAreaView, Animated } from "react-native";

import { Icon } from "../../helpers";
import Colors from '../../assets/colors';
import { StorageModal } from './storage';
import { Animate } from '../../services';
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

let CharacterModal: React.FC = ({ route, favorites }) => {

    const { id } = route.params;
    const [isLoad, setLoad] = useState(true);
    const [favorite, setFavorite] = useState(false);
    const [character, setCharacter] = useState<Character>()
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _getCharacter();
        _getFavorite();
    }, []);

    useEffect(() => {
        Animate.smooth(favorite ? 100 : 0, valueAnimate, 1800)
    }, [favorite])

    const _getCharacter = () => {
        StorageModal.getCharacter(id)
            .then(res => setCharacter(res))
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoad(false))
    }

    const _getFavorite = () => {
        let ids = favorites.ids;
        setFavorite(ids.indexOf(id) >= 0)
    }

    const backgroundColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primary, Colors.background],
    });

    const textColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.background, Colors.primary],
    });

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
                                    activeOpacity={1}
                                    backgroundColor={backgroundColor}
                                    onPress={() => {
                                        setFavorite(!favorite)
                                    }}
                                >
                                    <Icon
                                        size={22}
                                        lib={'AntDesign'}
                                        name={!favorite ? 'heart' : 'close'}
                                        color={favorite ? Colors.primary : Colors.background}
                                    />
                                    <LabelFavorite textColor={backgroundColor}>
                                        {
                                            favorite ?
                                                "Tirar Favorito"
                                                :
                                                "Favoritar"
                                        }
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

const mapStateToProps = favorites => favorites;

CharacterModal = connect(mapStateToProps)(CharacterModal);

export { CharacterModal };