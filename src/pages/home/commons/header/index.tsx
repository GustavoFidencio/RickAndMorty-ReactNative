import React, { memo, useRef, useEffect } from "react"

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
import { StorageHome } from '../../storage';

interface Props {
    setFav: () => void,
    fav: boolean,
    setCharac: ([]) => void,
    setErr: (string) => void,
    setLoad: (boolean) => void,
}

export const Header = memo(({ setFav, fav, setCharac, setErr, setLoad }: Props) => {

    const inputRef = useRef(null);
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(Number(fav), opacity, 600)
    }, [fav]);

    useEffect(() => {
        if (fav) inputRef.current.clear()
    }, [fav]);

    const _onPress = () => setFav();

    const _getCharacterByName = (name: string) => {
        setErr('')
        if (fav) setFav();
        setLoad(true)
        StorageHome.getByName(name)
            .then(res => setCharac(res))
            .catch(() => setErr('Personagem não encontrado'))
            .finally(() => setLoad(false))
    }

    return (
        <Container>
            <ContainerTitleFavorite>
                <Title>Personagens </Title>
                <BackgroundIcon onPress={_onPress}>
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
                    ref={inputRef}
                    placeholderTextColor="#c1bfbf"
                    onChangeText={_getCharacterByName}
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