import styled from 'styled-components/native';

import Colors from '../../assets/colors';

export const Title = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${Colors.primary};
    font-family: 'SulSans-Black';
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};
`;