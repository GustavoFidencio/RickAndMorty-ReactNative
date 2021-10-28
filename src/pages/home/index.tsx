import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StatusBar, FlatList, ActivityIndicator, TextInput } from "react-native";

import { Icon } from '../../helpers';
import Colors from '../../assets/colors';
import { StorageHome } from './storage';
import { Title, SafeArea, Container } from './styles';
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

export const Home: React.FC = ({ }) => {

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
            {/* <View style={{ marginBottom: 5 }}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Title>Personagens </Title>
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            marginRight: 10,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Colors.backgroundDark,
                        }}
                    >
                        <Icon
                            size={30}
                            name={'heart'}
                            lib={'EvilIcons'}
                            color={Colors.primary}
                        />
                    </View>
                </View>
                <View
                    style={{
                        borderRadius: 10,
                        flexDirection: 'row',
                        marginHorizontal: 10,
                        backgroundColor: Colors.backgroundDark,
                        marginTop: 5,
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            paddingLeft: 10,
                        }}
                        placeholder={'Pesquisar um personagem'}
                    />
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 99,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Colors.backgroundDark,
                        }}
                    >
                        <Icon
                            size={20}
                            name={'search'}
                            lib={'FontAwesome'}
                            color={Colors.primary}
                        />
                    </View>

                </View>

            </View> */}
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
                            // ListHeaderComponentStyle={{ alignItems: 'flex-start' }}
                            // ListHeaderComponent={() => }
                            renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
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