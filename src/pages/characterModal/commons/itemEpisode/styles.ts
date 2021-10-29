import styled from 'styled-components/native';

import Colors from '../../../../assets/colors';

export const Container = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
`;

export const InfoLocation = styled.Text`
    font-size: 25px;
    color: ${Colors.primary};
    font-family: 'SulSans-Black';
`;

export const LabelLocation = styled.Text`
    color: white;
    margin-left: 5px;
    font-size: 15px;
    font-family: 'SulSans-Bold';
`;