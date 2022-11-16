import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
display:flex;
align-items:center;
gap:10px;


`;
const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;
const Input = styled.input`
border:none;
border-bottom:1px solid ${({ theme }) => theme.soft};
background-color:transparent;
outline:none;
padding:5px;
width:100%;
color:${({ theme }) => theme.text};
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://burst.shopifycdn.com/photos/profile-of-a-man-with-beard-and-styled-hair.jpg?width=925&format=pjpg&exif=1&iptc=1" />
                <Input placeholder='Add a comment...' />


            </NewComment>
            <Comment />
            <Comment />

        </Container>
    );
};

export default Comments;
