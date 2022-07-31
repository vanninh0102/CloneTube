import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
	position: sticky;
	top: 0px;
	background-color: ${({ theme }) => theme.bgLighter};
	height: 56px;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: 100%;
	padding: 0px 20px;
	position: relative;
`;

const Search = styled.div`
	width: 40%;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
`;

const Input = styled.input`
	border: none;
	outline: none;
	background-color: transparent;
`;

const LoginButton = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Search>
					<Input placeholder="Search" />
					<SearchIcon />
				</Search>
				<LoginButton>
					<AccountIcon />
					SIGN IN
				</LoginButton>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
