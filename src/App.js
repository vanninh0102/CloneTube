import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
	display: flex;
`;

const Main = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
	padding: 0px 50px;
	margin-top: 22px;
`;

function App() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<BrowserRouter>
					<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
					<Main>
						<Navbar />
						<Wrapper>
							<Routes>
								<Route path="/">
									<Route index element={<Home />}></Route>
									<Route path="signin" element={<SignIn />}></Route>
									<Route path="video">
										<Route path=":id" element={<Video />}></Route>
									</Route>
								</Route>
							</Routes>
						</Wrapper>
					</Main>
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
}

export default App;
