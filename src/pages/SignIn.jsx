import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 56px - 22px);
	color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.bgLighter};
	border: 1px solid ${({ theme }) => theme.soft};
	padding: 20px 50px;
	gap: 10px;
`;

const Title = styled.h1`
	font-style: 24px;
`;
const SubTitle = styled.h2`
	font-style: 20px;
	font-weight: 300;
`;
const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.soft};
	border-radius: 3px;
	padding: 10px;
	background-color: transparent;
	width: 100%;
`;
const Button = styled.button`
	border-radius: 3px;
	border: none;
	padding: 10px 30px;
	font-weight: 500;
	cursor: pointer;
	background-color: ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
	display: flex;
	font-style: 10px;
	color: ${({ theme }) => theme.textSoft};
`;
const Links = styled.div`
	margin-left: 50px;
`;
const Link = styled.span`
	margin-left: 30px;
`;

const SignIn = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign in</Title>
				<SubTitle>to continue to CloneTube</SubTitle>
				<Input placeholder="Username" />
				<Input type={"password"} placeholder="Password" />
				<Button>Sign in</Button>
				<Title>or</Title>
				<Button>Sign up</Button>
			</Wrapper>
			<More>
				English(USA)
				<Links>
					<Link>Help</Link>
					<Link>Privacy</Link>
					<Link>Terms</Link>
				</Links>
			</More>
		</Container>
	);
};

export default SignIn;
