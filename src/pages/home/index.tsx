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
    const [heroes, setHeroes] = useState<Character[]>([])

    useEffect(() => {
        _getCharacteres()
    }, [])

    const _getCharacteres = (page: number = 0) => {
        StorageHome.getCharacteres(page)
            .then((res: Character[]) => setHeroes([...heroes, ...res]))
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoad(false))
    }

    const _getMoreCharacters = () => {
        if (isLoad) return;
        setLoad(true);
        let pagination = Math.floor(heroes.length / 20) + 1;
        console.log(pagination);
        _getCharacteres(pagination);
    }

    return (
        <Container>
            <SafeArea />
            <StatusBar barStyle={'light-content'} />
            <Header
            />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                {
                    !heroes.length ?
                        <ActivityIndicator size="large" color={Colors.primary} />
                        :
                        <FlatList<Character>
                            data={heroes}
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
                            onEndReachedThreshold={.8}
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