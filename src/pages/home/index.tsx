import React, { useState, useRef, useEffect } from "react";
import { Text, View, SafeAreaView, StatusBar, FlatList } from "react-native";

import { Title, Container } from './styles';
import { StorageHome } from './storage';

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

    const [isLoad, setLoad] = useState(true);
    const [heroes, setHeroes] = useState<Character[]>([])

    useEffect(() => {
        _getCharacteres()
    }, [])

    const _getCharacteres = () => {
        StorageHome.getCharacteres()
            .then(res => {
                console.log(res);
                setHeroes(res)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Container>
            <StatusBar barStyle={'light-content'} />
            <Title >
                Personagens
            </Title>
            <View style={{ flex: 1 }} >
                <FlatList
                    style={{
                        paddingHorizontal: 7.5
                    }}
                    data={heroes}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        console.log(item);
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    height: 200,
                                    padding: 7.5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: index % 2 != 0 ? 20 : 0
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                        borderRadius: 20,
                                        backgroundColor: 'white',
                                    }}
                                >
                                </View>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'SulSans-Black',
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={(_, index) => index}
                />
            </View>
        </Container >
    )
}