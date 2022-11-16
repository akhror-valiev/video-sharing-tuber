import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	padding: 5px 20px;
	position: relative;
	
`;
const Search = styled.div`
	position: absolute;
	left: 0px;
	right: 0px;
	margin: auto;
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
	
`;
const Input = styled.input`
border:none;
background-color:transparent;`;

const Button = styled.button`
	padding: 5px 15px;
	background: transparent;
	border: 1px solid;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder="Search..." />
					<SearchOutlinedIcon />
				</Search>
				<Link to="signin" style={{ textDecoration: "none" }}>

					<Button>
						<AccountCircleOutlinedIcon />
						SIGN IN
					</Button>
				</Link>
			</Wrapper>
		</Container >
	);
};

export default Navbar;