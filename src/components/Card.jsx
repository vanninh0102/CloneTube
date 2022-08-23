import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: ${(props) => props.type !== "sm" && "360px"};
	margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
	cursor: pointer;
	/* padding: 0px 20px; */
	display: ${(props) => props.type === "sm" && "flex"};
	gap: 10px;
`;
const Image = styled.img`
	width: 100%;
	height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
	background-color: #999;
	flex: 1;
`;

const Details = styled.div`
	display: flex;
	margin-top: ${(props) => (props.type === "sm" ? "none" : "16px")};
	gap: 12px;
	flex: 1;
`;

const ChannelImg = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
	display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 10px 0px;
`;
const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
	return (
		<Link to={"video/test"} style={{ textDecoration: "none" }}>
			<Container type={type}>
				<Image
					type={type}
					src="https://i.ytimg.com/vi/vjjFjuf7NBQ/maxresdefault.jpg"
				/>
				<Details type={type}>
					<ChannelImg
						type={type}
						src="https://znews-stc.zdn.vn/static/topic/person/damvinhhung.jpg"
					/>
					<Texts>
						<Title>Test Video Title 1. Test Video Title 1.</Title>
						<ChannelName>MrNinh</ChannelName>
						<Info>1,000,000 Views · 1 month ago</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};

export default Card;