import React, { memo, useRef, useState, useEffect } from "react"

import {
    Title,
    TextInput,
    Container,
    AnimatedIcon,
    BackgroundIcon,
    BackgroundInput,
    ContainerTitleFavorite,
} from './styles';
import { Icon } from '../../../../helpers';
import { Animated } from "react-native";
import { Animate } from '../../../../services';
import Colors from '../../../../assets/colors';

export const Header = memo(({ }) => {

    const [favorite, setFavorite] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(Number(favorite), opacity, 600)
    }, [favorite])

    return (
        <Container>
            <ContainerTitleFavorite>
                <Title>Personagens </Title>
                <BackgroundIcon onPress={() => setFavorite(!favorite)}>
                    <Icon
                        size={22}
                        name={'hearto'}
                        lib={'AntDesign'}
                        color={Colors.primary}
                    />
                    <AnimatedIcon opacity={opacity}>
                        <Icon
                            size={22}
                            name={'heart'}
                            lib={'AntDesign'}
                            color={Colors.primary}
                        />
                    </AnimatedIcon>
                </BackgroundIcon>
            </ContainerTitleFavorite>
            <BackgroundInput>
                <TextInput
                    placeholderTextColor="#c1bfbf"
                    placeholder={'Pesquisar um personagem'}
                />
                <Icon
                    size={20}
                    name={'search'}
                    lib={'FontAwesome'}
                    color={Colors.primary}
                />
            </BackgroundInput>
        </Container>
    )
})