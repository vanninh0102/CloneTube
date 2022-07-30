import React from "react";
import styled from "styled-components";
import LogoImg from "../img/youtube.png";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusicOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEventsOutlined";
import SportsEsportsIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreationOutlined";
import NewspaperIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import ReportProblemIcon from "@mui/icons-material/ReportProblemOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/NightlightOutlined";

const Container = styled.div`
	flex: 1;
	background-color: #202020;
	height: 100vh;
	color: white;
	font-size: 14px;
	position: sticky;
	min-width: 200px;
	top: 0;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const Wrapper = styled.div`
	padding: 10px 26px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	margin-bottom: 25px;
`;

const Img = styled.img`
	height: 25px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 8px 0px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border-width: 0.5px;
	border-style: solid;
	border-color: #373737;
`;

const Login = styled.div``;
const LoginButton = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 2px solid #3ea6ff;
	color: #3ea6ff;
	font-weight: bold;
	margin-top: 0.75rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const Menu = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<Img src={LogoImg} />
					Lamatube
				</Logo>
				<Item>
					<HomeIcon />
					Home
				</Item>
				<Item>
					<ExploreIcon />
					Explore
				</Item>
				<Item>
					<SubscriptionsIcon />
					Subscriptions
				</Item>
				<Hr />
				<Item>
					<VideoLibraryIcon />
					Library
				</Item>
				<Item>
					<HistoryIcon />
					History
				</Item>
				<Hr />
				<Login>
					Sign in to like videos, comment and subcribe.
					<LoginButton>
						<AccountIcon />
						SIGN IN
					</LoginButton>
				</Login>
				<Hr />
				<Item>
					<LibraryMusicIcon />
					Music
				</Item>
				<Item>
					<EmojiEventsIcon />
					Sports
				</Item>
				<Item>
					<SportsEsportsIcon />
					Gaming
				</Item>
				<Item>
					<MovieCreationIcon />
					Movies
				</Item>
				<Item>
					<NewspaperIcon />
					News
				</Item>
				<Item>
					<LiveTvIcon />
					Live
				</Item>
				<Hr />
				<Item>
					<SettingsIcon />
					Settings
				</Item>
				<Item>
					<ReportProblemIcon />
					Report
				</Item>
				<Item>
					<HelpIcon />
					Help
				</Item>
				<Item>
					<LanguageIcon />
					Light Mode
				</Item>
			</Wrapper>
		</Container>
	);
};
