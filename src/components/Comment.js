import styled from "styled-components";

const Container = styled.div`
	display: flex;
	gap: 10px;
	margin: 30px 0px;
    
`;

const Avatar = styled.img`
	width: 50px;
	height: 35px;
	border-radius: 50%;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
    color:${({ theme }) => theme.text};
    
`;

const Name = styled.span`

font-size:13px;
font-weight:500;`;



const Date = styled.span`
font-size:12px;
font-weight:400;

color:${({ theme }) => theme.textSoft};
margin-left:5px;
`;

const Text = styled.span`
font-size:14px;`;

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://burst.shopifycdn.com/photos/profile-of-a-man-with-beard-and-styled-hair.jpg?width=925&format=pjpg&exif=1&iptc=1" />
            <Details>
                <Name>
                    John Doe<Date>2 days ago</Date>
                </Name>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    doloremque similique vitae commodi quasi mollitia veritatis distinctio
                    neque quisquam, ipsa facere, tempore libero nulla aspernatur eius
                    incidunt explicabo quo aperiam?
                </Text>
            </Details>
        </Container>
    );
};

export default Comment;
