import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, Text, ActivityIndicator } from "react-native";

import Colors from '../../assets/colors';
import { SafeArea, Container } from './styles';

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

export const CharacterModal: React.FC = ({ route }) => {

    const { id } = route.params;

    const [isLoad, setLoad] = useState(false);
    const [heroes, setHeroes] = useState<Character[]>([])

    useEffect(() => {
        _getCharacter()
    }, []);

    const _getCharacter = () => {
        console.log(id);
    }

    return (
        <Container>
            <SafeArea />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <Text>
                    oi
                </Text>
            </View>
        </Container >
    )
}