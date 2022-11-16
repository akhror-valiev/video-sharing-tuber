import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
	display: flex;
	gap: 24px;
`;
const Content = styled.div`
	flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Info = styled.span`
	color: ${({ theme }) => theme.text};
`;
const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
	flex: 2;
`;
const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	gap: 30px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;
const Subscribe = styled.button` 
font-weight:500;
background-color:red;
color:white;
border:none;
border-radius:3px;
height:max-content;
padding:10px 30px;
cursor:pointer;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
	font-weight: 500;
`;
const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.text};
	font-size: 12px;
`;
const Description = styled.p`
	font-size: 14px;
`;

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height={720}
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoWrapper>
                <Title>Sample Video</Title>
                <Details>
                    <Info>3000 views June 22, 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon />
                            123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon />
                            Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon />
                            Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon />
                            Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src=" https://burst.shopifycdn.com/photos/profile-of-a-man-with-beard-and-styled-hair.jpg?width=925&format=pjpg&exif=1&iptc=1" />
                        <ChannelDetail>
                            <ChannelName>Nature</ChannelName>
                            <ChannelCounter>10K subscribers</ChannelCounter>
                            <Description>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                                iusto commodi est, excepturi iste.
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    );
};

export default Video;
