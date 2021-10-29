import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, ActivityIndicator } from "react-native";

import Colors from '../../assets/colors';
import { StorageHome } from './storage';
import { SafeArea, Container } from './styles';
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

let Home: React.FC = ({ navigation, favorites }) => {

    const [isLoad, setLoad] = useState(false);
    const [enableFav, setFav] = useState(false);
    const [characters, setCharac] = useState<Character[]>([])

    useEffect(() => {
        _getCharacteres()
    }, [])

    useEffect(() => {
        console.log(characters);
    }, [characters])

    useEffect(() => {
        if (enableFav) {
            _getMultiplesCharacters();
        } else {
            setLoad(true);
            _getCharacteres(1);
        }
    }, [enableFav])

    const _getMultiplesCharacters = () => {
        setLoad(true)
        StorageHome.getMultipleCharacteres(favorites.ids)
            .then((res: Character[]) => setCharac(res))
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoad(false))
    }

    const _getCharacteres = (page: number = 0) => {
        let oldData = characters;
        if (characters.length) oldData = [];
        StorageHome.getCharacteres(page)
            .then((res: Character[]) => setCharac([...oldData, ...res]))
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoad(false))
    }

    const _getMoreCharacters = () => {
        console.log(characters.length, 'dsadsadsa');
        if (isLoad || enableFav || characters.length < 20) return;
        console.log('reachhhhehdd');
        setLoad(true);
        let pagination = Math.floor(characters.length / 20) + 1;
        _getCharacteres(pagination);
    }

    return (
        <Container>
            <SafeArea />
            <StatusBar barStyle={'light-content'} />
            <Header setFav={() => setFav(!enableFav)} backgroundColor={Colors.background} />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                {
                    !characters.length ?
                        <ActivityIndicator size="large" color={Colors.primary} />
                        :
                        <FlatList<Character>
                            data={characters}
                            bounces={false}
                            numColumns={2}
                            style={{ paddingHorizontal: 7.5 }}
                            renderItem={({ item, index }) =>
                                <RenderItem
                                    item={item}
                                    index={index}
                                    navigation={navigation}
                                />
                            }
                            ListFooterComponent={() =>
                                <View style={{ minHeight: 20 }} >
                                    {
                                        isLoad &&
                                        <ActivityIndicator
                                            size="small"
                                            color={Colors.primary}
                                            style={{
                                                marginVertical: 15,
                                            }}
                                        />
                                    }
                                </View>
                            }
                            onEndReached={_getMoreCharacters}
                            // getItemLayout={(_, index) => (
                            //     { length: 200, offset: 200 * index, index }
                            // )}
                            onEndReachedThreshold={.1}
                            keyExtractor={({ id }: { id: number }) => String(id)}
                        />
                }
            </View>
        </Container >
    )
}

const mapStateToProps = favorites => favorites;

Home = connect(mapStateToProps)(Home);

export { Home };