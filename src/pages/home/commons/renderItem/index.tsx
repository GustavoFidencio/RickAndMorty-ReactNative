import React, { memo } from "react"

import { Icon } from '../../../../helpers';
import Colors from '../../../../assets/colors';
import { Container, Image, ContainerInfo, LabelName } from './styles';

interface Props {
    item: {
        name: string,
        gender: string,
        image: string,
        id: number
    },
    index: number,
    navigation: {
        navigate: (data: string, { id: any }) => void
    }
}

export const RenderItem = memo(({ item, index, navigation }: Props) => {

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
                    lib={'Foundation'}
                    color={Colors.primary}
                    name={gender == 'Female' ? 'female-symbol' : 'male-symbol'}
                />
            </ContainerInfo>
        </Container>
    )
});