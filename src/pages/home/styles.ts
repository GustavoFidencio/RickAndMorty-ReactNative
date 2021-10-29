import styled from 'styled-components/native';

import Colors from '../../assets/colors';

export const SafeArea = styled.SafeAreaView`
    flex: 0;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.background};
`;

export const ContainerList = styled.View`
    flex: 1;
    justify-content: center;
`;

export const LabelNoneFav = styled.Text`
    opacity: .7;
    color: white;
    text-align: center;
    font-family: 'SulSans-BoldItalic';
`;

export const ContainerFooter = styled.View`
    min-height: 20px;
`;

export const LoadBottom = styled.ActivityIndicator`
    margin: 15px 0 15px 0;
`;