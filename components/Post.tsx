// @ts-ignore
import styled from 'styled-components/native';

const PostView = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
    &:last-child {
        margin-bottom: 20px;    
    }
`;

const PostImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    margin-right: 12px;
`;

const PostDetails = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

const PostTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
`;

const PostText = styled.Text`
    font-size: 15px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
`;

// @ts-ignore
export const Post = ({title, imageUrl, createdAt}) => {
    return <PostView>
        <PostImage source={{uri: imageUrl}}/>
        <PostDetails>
            <PostTitle>{title}</PostTitle>
            <PostText>{createdAt}</PostText>
        </PostDetails>
    </PostView>
}