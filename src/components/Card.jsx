import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 360px;
	margin-bottom: 45px;
	cursor: pointer;
	padding: 0px 20px;
`;
const Image = styled.img`
	width: 100%;
	height: 202px;
	background-color: #999;
`;

const Details = styled.div`
	display: flex;
	margin-top: 16px;
	gap: 12px;
`;

const ChannelImg = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
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

const Card = () => {
	return (
		<Link to={"video/test"} style={{ textDecoration: "none" }}>
			<Container>
				<Image src="https://i.ytimg.com/vi/vjjFjuf7NBQ/maxresdefault.jpg" />
				<Details>
					<ChannelImg src="https://znews-stc.zdn.vn/static/topic/person/damvinhhung.jpg" />
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
