import React, { useState, useEffect } from "react";
import { View, StatusBar, Text, ActivityIndicator, Image, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";

import { Icon } from "../../helpers";
import { Container } from './styles';
import Colors from '../../assets/colors';
import { StorageModal } from './storage';

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

const { width } = Dimensions.get('window');

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
            <View style={{ flex: 1, justifyContent: 'center' }} >
                {
                    isLoad ?
                        <ActivityIndicator size="large" color={Colors.primary} />
                        :
                        <>
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        height: 5,
                                        left: '35%',
                                        opacity: .7,
                                        width: '30%',
                                        marginTop: 10,
                                        backgroundColor: 'gray',
                                    }}
                                />
                                <View
                                    style={{
                                        width: '100%',
                                        marginTop: 10,
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Image
                                        source={{ uri: character.image }}
                                        resizeMode={'contain'}
                                        style={{
                                            width: width * .3,
                                            height: width * .3,
                                            borderRadius: 10,
                                            marginLeft: 10
                                        }}
                                    />
                                    <View
                                        style={{
                                            flex: 1,
                                            padding: 10
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontFamily: 'SulSans-Bold',
                                                fontSize: 22
                                            }}
                                        >
                                            {character.name}
                                        </Text>

                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontFamily: 'SulSans-Regular',
                                            }}
                                        >
                                            Status {character.status}
                                        </Text>


                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontFamily: 'SulSans-Regular',
                                            }}
                                        >
                                            Especie {character.species}
                                        </Text>

                                    </View>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <View style={{ padding: 10 }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Icon
                                                size={23}
                                                lib={'Ionicons'}
                                                name={'location'}
                                                color={Colors.primary}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    color: 'white',
                                                    marginLeft: 5,
                                                    fontFamily: 'SulSans-Bold',
                                                }}
                                            >
                                                Localização
                                            </Text>
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontFamily: 'SulSans-Regular',
                                            }}
                                        >
                                            {character.location.name}
                                        </Text>
                                    </View>

                                    <View style={{ padding: 10 }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Icon
                                                size={25}
                                                lib={'Ionicons'}
                                                name={'planet'}
                                                color={Colors.primary}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    color: 'white',
                                                    marginLeft: 5,
                                                    fontFamily: 'SulSans-Bold',
                                                }}
                                            >
                                                Origem
                                            </Text>
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontFamily: 'SulSans-Regular',
                                            }}
                                        >
                                            {character.origin.name}
                                        </Text>
                                    </View>

                                    <View style={{ padding: 10 }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Icon
                                                size={25}
                                                color={Colors.primary}
                                                name={'gender-male-female'}
                                                lib={'MaterialCommunityIcons'}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    color: 'white',
                                                    marginLeft: 5,
                                                    fontFamily: 'SulSans-Bold',
                                                }}
                                            >
                                                Gênero
                                            </Text>
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontFamily: 'SulSans-Regular',
                                            }}
                                        >
                                            {character.gender}
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            padding: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 25,
                                                color: Colors.primary,
                                                fontFamily: 'SulSans-Black',
                                            }}
                                        >
                                            {character.episode.length}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontFamily: 'SulSans-Bold',
                                                left: 5
                                            }}
                                        >
                                            Episódios
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        padding: 20,
                                        elevation: 2,
                                        borderRadius: 99,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingHorizontal: 30,
                                        backgroundColor: Colors.primary,

                                        shadowRadius: 3,
                                        shadowOpacity: 0.3,
                                        shadowColor: '#000',
                                        shadowOffset: { width: 1, height: 1 },
                                    }}
                                >
                                    <Icon
                                        size={22}
                                        name={'heart'}
                                        lib={'AntDesign'}
                                        color={Colors.background}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 22,
                                            marginLeft: 10,
                                            color: Colors.background,
                                            fontFamily: 'SulSans-Black',
                                        }}
                                    >
                                        Favoritar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }
                <SafeAreaView style={{ flexGrow: 0 }} />
            </View>
        </Container >
    )
}