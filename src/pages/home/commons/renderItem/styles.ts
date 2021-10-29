import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    height: 200px;
    padding: 7.5px;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.index % 2 != 0 ? 20 : 0}px;
`;

export const Image = styled.Image`
    flex: 1;
    width: 100%;
    border-radius: 20px;
`;

export const ContainerInfo = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0 10px 0 10px;
    justify-content: space-between;
`;

export const LabelName = styled.Text`
    color: white;
    font-family: 'SulSans-Black';
`;