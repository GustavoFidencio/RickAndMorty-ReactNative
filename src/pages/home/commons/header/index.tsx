import React, { memo } from "react"

import { Title, } from './styles';
import { Icon } from '../../../../helpers';
import Colors from '../../../../assets/colors';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export const Header = memo(() => {

    return (
        <View style={{ marginBottom: 5 }}>
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
        </View>
    )
})