import styled from 'styled-components/native';
import { Dimensions } from "react-native";

import Colors from '../../assets/colors';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.background};
`;

export const Image = styled.Image`
    margin-left: 10px;
    border-radius: 10px;
    width: ${width * .3}px;
    height: ${width * .3}px;
`;

export const ContainerButton = styled.View`
    align-items: center;
`;

export const TouchableFavorite = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-radius: 99px;
    justify-content: center;
    padding: 20px 30px 20px 30px;
    box-shadow: 1px 1px 5px black;
    background-color: ${Colors.primary};
`;

export const LabelFavorite = styled.Text`
    font-size: 22px;
    margin-left: 10px;
    font-family: 'SulSans-Black';
    color: ${Colors.background};
`;

export const GoBackBar = styled.View`
    opacity: .7;
    width: 30%;
    height: 5px;
    margin-left: 35%;
    margin-top: 10px;
    background-color: gray;
`;

export const LabelName = styled.Text`
    color: white;
    font-size: 22px;
    font-family: 'SulSans-Bold';
`;

export const LabelInfo = styled.Text`
    color: white;
    font-size: 15px;
    font-family: 'SulSans-Regular';
`;

export const ContainerCharacter = styled.View`
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
`;

export const ContainerLabels = styled.View`
    flex: 1;
    padding: 10px;
`;

export const Center = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ContainerItems =  styled.View`
    margin-top: 20px;
`;