import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";

function App() {
	const [selectedPage, setSelectedPage] = useState("home");
	const isAboveMediumScreens = useMediaQuery({ query: "(min-width: 1060px)" });
	const [isTopOfPage, setIsTopOfPage] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage("home");
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app bg-deep-blue">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className="w-5/6 mx-auto md:h-full">
				{isAboveMediumScreens && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<Landing setSelectedPage={setSelectedPage} />
			</div>
		</div>
	);
}

export default App;
