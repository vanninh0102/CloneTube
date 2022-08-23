import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
	/* display: grid;
	grid-template-columns: repeat(auto-fill, 360px);
	grid-gap: 1rem; */
	display: flex;
	flex-wrap: wrap;
	justify-items: center;
	justify-content: space-around;
	list-style: none;
	&::after {
	}
`;

const Home = () => {
	return (
		<Container>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</Container>
	);
};

export default Home;
