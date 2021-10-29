import { Animated } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../../../assets/colors';

export const Container = styled.View`
    margin-bottom: 5px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 22px;
    font-family: 'SulSans-Black';
`;

export const BackgroundIcon = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    background-color: ${Colors.backgroundDark};
`;

export const ContainerTitleFavorite = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 10px 0 10px;
    justify-content: space-between;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: white;
`;

export const BackgroundInput = styled.View`
    height: 40px;
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 0 10px 0 10px;
    margin: 5px 10px 0 10px;
    background-color: ${Colors.backgroundDark};
`;

const backgroundIconAnimate = styled.View`
    position: absolute;
    opacity: ${props => props.opacity};
`;

export const AnimatedIcon = Animated.createAnimatedComponent(backgroundIconAnimate);