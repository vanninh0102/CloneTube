import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

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
	color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
	display: flex;
	align-content: center;
	gap: 5px;
	color: ${({ theme }) => theme.text};
	/* justify-content: space-between; */
`;

const Hr = styled.div`
	border: 0.5px solid ${({ theme }) => theme.textSoft};
	margin: 15px 0px;
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
	gap: 20px;
`;
const Image = styled.img`
	height: 50px;
	border-radius: 50%;
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
	color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.p`
	font-size: 14px;
`;

const Subbcribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 4px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width="100%"
						height="720"
						src="https://www.youtube.com/embed/yIaXoop8gl4"
						title="React Video Sharing App UI Design | Youtube UI Clone with React"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>Title of Video</Title>
				<Details>
					<Info>31.142 lượt xem &#183; 30 thg 6, 2022</Info>
					<Buttons>
						<Button>
							<ThumbUpOutlinedIcon /> 123
						</Button>
						<Button>
							<ThumbDownOutlinedIcon /> 456
						</Button>
						<Button>
							<ReplyOutlinedIcon /> Share
						</Button>
						<Button>
							<AddTaskOutlinedIcon /> Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<Image src="https://znews-stc.zdn.vn/static/topic/person/damvinhhung.jpg" />
						<ChannelDetail>
							<ChannelName>Dam Vinh Hung</ChannelName>
							<ChannelCounter>500k subcribers</ChannelCounter>
							<Description>
								Video uploading app design using React and Styled
								Components. Youtube clone design with hooks and
								functional component. React video player. You are
								watching the 1st part. Watch the second part:
								https://youtu.be/CCF-xV3RSSs If it is valuable to you,
								you can support Lama Dev. Join:
								https://www.youtube.com/channel/UCOxW... Buy me a
								coffee: https://www.buymeacoffee.com/lamadev Source
								Code: https://github.com/safak/youtube2022/... Join Lama
								Dev groups Facebook:
								https://www.facebook.com/groups/lamadev Instagram:
								https://www.instagram.com/lamawebdev Discord:
								https://discord.gg/yKremu4mPr Twitter:
								https://twitter.com/lamawebdev
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subbcribe>SUBCRIBE</Subbcribe>
				</Channel>
			</Content>
			<Recommendation>Recommendation</Recommendation>
		</Container>
	);
};

export default Video;
