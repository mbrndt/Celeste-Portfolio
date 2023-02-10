import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

	return (
		<section
			id="home"
			className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
		>
			{/* IMAGE SECTION */}
			<div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
				{isAboveMediumScreen ? (
					<div
						className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
              before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
					>
						<img
							alt="profile"
							className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
							src="assets/profile-image.png"
						/>
					</div>
				) : (
					<img
						alt="profile"
						className="z-10 w-full max-w-[400px] md:max-w-[600px]"
						src="assets/profile-image2.png"
					/>
				)}
			</div>

			{/* MAIN TEXT */}
			<div className="z-30 basis-2/5 mt-12 md:mt-32">
				{/* HEADINGS */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="text-6xl font-playfair z-10 text-center md:text-start">
						Mareike {""}
						<span
							className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
						>
							Brandt
						</span>
					</p>

					<p className="mt-10 mb-7 text-sm text-center md:text-start">
						Hi and welcome to my portfolio! I am a driven and enthusiastic
						junior web developer eager to learn and grow in my career. With a
						passion for creating engaging and visually appealing websites, I
						have a unique perspective on the digital world that I bring to every
						project. Take a look around to see some of my recent projects, and
						if you like what you see, don't hesitate to get in touch! I am eager
						to work on new projects and continue to develop my skills.
					</p>
				</motion.div>

				{/* call to actions */}
				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<AnchorLink
						href="#contact"
						className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
						onClick={() => setSelectedPage("contact")}
					>
						Contact Me
					</AnchorLink>
					<AnchorLink
						href="#contact"
						className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
						onClick={() => setSelectedPage("contact")}
					>
						<div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
							Let's Talk
						</div>
					</AnchorLink>
				</motion.div>

				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	);
};

export default Landing;
