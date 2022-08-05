// @ts-ignore
import styled from 'styled-components/native';

const HeaderView = styled.View`
    flex-direction: row;
    padding: 15px;
    background: #000;
`;

const News = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: white;
`;

export const Header = () => {
    return (
        <HeaderView>
            <News>NEWS!</News>
        </HeaderView>
    )
}