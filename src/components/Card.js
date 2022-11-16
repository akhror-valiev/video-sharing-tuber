import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: ${(props) => props.type !== "sm" && "360px"};
	margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
	cursor: pointer;
	display: ${(props) => props.type === "sm" && "flex"};
`;
const Image = styled.img`
	width: 100%;
	height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background - color: #999;
    gap:10px;
    flex:1;
`;

const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};
gap:12px;
flex:1;
`;
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background - color: #999;
display: ${(props) => props.type === "sm" && "none"};
color:${({ theme }) => theme.text};
`;

const Texts = styled.div`
margin-left:10px;`;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color:${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({ theme }) => theme.text};
margin: 9px 0px;
`;
const Info = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.text};
`;

const Card = ({ type }) => {
    return (
        <Link to="/video/test" style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image
                    type={type}
                    src="https://burst.shopifycdn.com/photos/smart-home-assistant-smartphone-laptop.jpg?width=925&format=pjpg&exif=1&iptc=1"
                />
                <Details type={type}>
                    <ChannelImage
                        type={type}
                        src="https://burst.shopifycdn.com/photos/profile-of-a-man-with-beard-and-styled-hair.jpg?width=925&format=pjpg&exif=1&iptc=1"
                    />
                    <Texts>
                        <Title>Sample Video</Title>
                        <ChannelName>Lifstyle</ChannelName>
                        <Info>1000 views - 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;
