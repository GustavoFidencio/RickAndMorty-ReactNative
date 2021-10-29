import React, { memo } from "react"

import { Icon } from '../../../../helpers';
import Colors from '../../../../assets/colors';
import { Container, Image, ContainerInfo, LabelName } from './styles';

export const RenderItem = memo(({ item, index, navigation }) => {
    
    const { name, gender, image, id } = item;

    return (
        <Container
            index={index}
            onPress={() => navigation.navigate('CharacterModal', { id })}
        >
            <Image source={{ uri: image }} />
            <ContainerInfo>
                <LabelName>
                    {name}
                </LabelName>
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
            </ContainerInfo>
        </Container>
    )
});