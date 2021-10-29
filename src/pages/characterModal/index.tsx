import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { useState, useEffect, useRef } from "react";
import { View, ActivityIndicator, SafeAreaView, Animated } from "react-native";

import { Icon } from "../../helpers";
import { Animate } from '../../services';
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
import { addFavorite } from '../../rdx/actions';

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

let CharacterModal: React.FC = ({ route, favorites, addFavorite }) => {

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

        console.log(favorites, 'shuernous');
        
        let ids = favorites.ids;
        setFavorite(ids.indexOf(id) >= 0)
    }

    const backgroundColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primary, Colors.background],
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

                                        addFavorite(id)

                                    }}
                                >
                                    <Icon
                                        size={22}
                                        lib={'AntDesign'}
                                        name={!favorite ? 'heart' : 'close'}
                                        color={favorite ? Colors.primary : Colors.background}
                                    />
                                    <LabelFavorite textColor={favorite ? Colors.primary : Colors.background}>
                                        {favorite ? "Tirar Favorito" : "Favoritar"}
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

const mapDispatchToProps = val => (
    bindActionCreators({
        addFavorite,
    }, val)
);

CharacterModal = connect(mapStateToProps, mapDispatchToProps)(CharacterModal);

export { CharacterModal };