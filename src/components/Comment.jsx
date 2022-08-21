import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	gap: 10px;
	margin: 30px 0px;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
	font-size: 13px;
	font-weight: 500;
`;
const Date = styled.span`
	font-style: 12px;
	font-weight: 400;
	color: ${({ theme }) => theme.textSoft};
	margin-left: 10px;
`;
const Text = styled.span`
	font-style: 14px;
	font-weight: 400;
`;

const Comment = () => {
	return (
		<Container>
			<Avatar src="https://genzrelax.com/wp-content/uploads/2022/03/anh-dai-dien-dep-1.jpg" />
			<Details>
				<Name>
					Johnny Đảk <Date>1 day ago</Date>
				</Name>
				<Text>
					The time had come for Nancy to say goodbye. She had been dreading
					this moment for a good six months, and it had finally arrived
					despite her best efforts to forestall it. No matter how hard she
					tried, she couldn't keep the inevitable from happening. So the
					time had come for a normal person to say goodbye and move on. It
					was at this moment that Nancy decided not to be a normal person.
					After all the time and effort she had expended, she couldn't
					bring herself to do it.
				</Text>
			</Details>
		</Container>
	);
};

export default Comment;
