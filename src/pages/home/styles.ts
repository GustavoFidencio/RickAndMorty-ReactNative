import styled from 'styled-components/native';

import Colors from '../../assets/colors';

export const Title = styled.Text`
    height: 40px;
    font-size: 22px;
    padding: 10px;
    color:white;
    font-family: 'SulSans-Black';
`;

export const SafeArea = styled.SafeAreaView`
    flex: 0;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.background};
`;