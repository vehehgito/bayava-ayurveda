import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import ResponsiveBenefits from "./ResponsiveBenefits";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import CallToAction from "./CallToAction";

const Home = () => {
	return (
		<div>
			<div>
				<Hero />
			</div>
			<div className="max-[933px]:hidden flex">
				<Benefits />
			</div>
			<div className="min-[933px]:hidden flex">
				<ResponsiveBenefits />
			</div>
			<div>
				<HowItWorks />
			</div>
			<div>
				<Reviews />
			</div>
			<div>
				<CallToAction />
			</div>
		</div>
	);
};

export default Home;
