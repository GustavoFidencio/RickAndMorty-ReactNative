import { SafeArea, Container, ContainerList, LabelNoneFav, ContainerFooter, LoadBottom } from './styles';

import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";
import { StatusBar, FlatList, ActivityIndicator } from "react-native";

import Colors from '../../assets/colors';
import { StorageHome } from './storage';
import { RenderItem, Header } from './commons';

interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type?: string,
    gender: string,
    origin: {
        name: string,
        url?: string,
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

interface Props {
    navigation: object,
    favorites: [number]
}

let Home: React.FC<Props> = ({ navigation, favorites }) => {

    const [err, setErr] = useState('');
    const [limit, setLimit] = useState(0);
    const [isLoad, setLoad] = useState(false);
    const [enableFav, setFav] = useState(false);
    const [characters, setCharac] = useState<Character[]>([])

    useEffect(() => {
        _getCharacteres()
    }, []);

    useEffect(() => {
        if (enableFav && !characters.length) setErr('Você não possui nenhum favorito...')
    }, [enableFav, characters])

    useEffect(() => {
        if (favorites && enableFav) _getMultiplesCharacters();
    }, [favorites])

    useEffect(() => {
        if (enableFav) _getMultiplesCharacters();
        else {
            setLoad(true);
            _getCharacteres(1, true);
        }
    }, [enableFav]);

    const _getMultiplesCharacters = () => {
        if (!favorites.ids.length) return setCharac([]);
        setLoad(true)
        StorageHome.getMultipleCharacteres(favorites.ids)
            .then((res: Character[]) => setCharac(res))
            .catch(err => console.log(err))
            .finally(() => setLoad(false))
    }

    const _getCharacteres = (page: number = 0, hideFav = false) => {
        let oldData = characters;
        if (hideFav) oldData = [];
        StorageHome.getCharacteres(page)
            .then(({ info, results }) => {
                setLimit(info.pages);
                setCharac([...oldData, ...results]);
            })
            .catch(() => setErr('Ops, tivemos alguns problemas...'))
            .finally(() => setLoad(false))
    }

    const _getMoreCharacters = () => {
        if (isLoad || enableFav || characters.length < 20) return;
        let pagination = Math.floor(characters.length / 20) + 1;
        if (pagination > limit) return;
        setLoad(true);
        _getCharacteres(pagination);
    }

    return (
        <Container>
            <SafeArea />
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.background} />
            <Header
                setErr={setErr}
                fav={enableFav}
                setCharac={setCharac}
                setFav={() => setFav(!enableFav)}
            />
            <ContainerList>
                {
                    !characters.length ?
                        err != '' ?
                            <LabelNoneFav>
                                {err}
                            </LabelNoneFav>
                            :
                            <ActivityIndicator size="large" color={Colors.primary} />
                        :
                        <FlatList<Character>
                            data={characters}
                            bounces={false}
                            numColumns={2}
                            onEndReachedThreshold={.8}
                            style={{ paddingHorizontal: 7.5 }}
                            onEndReached={_getMoreCharacters}
                            keyExtractor={({ id }: { id: number }) => String(id)}
                            renderItem={({ item, index }) => <RenderItem item={item} index={index} navigation={navigation} />}
                            ListFooterComponent={() =>
                                <ContainerFooter>
                                    {isLoad && <LoadBottom size="small" color={Colors.primary} />}
                                </ContainerFooter>
                            }
                        />
                }
            </ContainerList>
        </Container >
    )
}

const mapStateToProps = favorites => favorites;

Home = connect(mapStateToProps)(Home);

export { Home };