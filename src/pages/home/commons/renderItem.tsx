import React, { memo } from "react"

import { Icon } from '../../../helpers';
import Colors from '../../../assets/colors';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export const RenderItem = memo(({ item, index }) => {
    
    const { name, gender, image, id } = item;

    return (
        <TouchableOpacity
            style={{ ...styles.container, marginTop: index % 2 != 0 ? 20 : 0 }}
        >
            <Image
                style={styles.Image}
                source={{ uri: image }}
            />
            <View style={styles.containerInfo}>
                <Text style={styles.labelName}>
                    {name}
                </Text>
                <Icon
                    size={20}
                    color={Colors.primary}
                    name={
                        gender == 'Female' ?
                            'female-symbol'
                            :
                            'male-symbol'
                    }
                    lib={'Foundation'}
                />
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        padding: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        flex: 1,
        width: '100%',
        borderRadius: 20,
    },
    containerInfo: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    labelName: {
        color: 'white',
        fontFamily: 'SulSans-Black',
    }

})