import React from "react";
import { Link } from "react-router-dom";
import GoldOutlineButton from "../Reusables/GoldOutlineButton";

const Hero = () => {
	return (
		<div className="w-full h-screen">
			<div className="absolute w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
			<div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
			<div className="relative h-screen w-full flex items-center justify-center">
				<div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 max-[375px]:m-12 max-[478px]:m-8 max-[575px]:m-7">
					<div className="font-crimson uppercase">
            <h4 className="text-xl text-ayurveda-yellow">
              Consult online with
            </h4>
						<h1 className="md:text-5xl text-4xl text-ayurveda-gold font-bold w-26 shadow-peach">
							Ayurveda
						</h1>
						<span className="md:text-7xl text-5xl text-white font-bold shadow-smoke-yellow drop-shadow-md">
              Specialised
						</span>
						<div className="md:text-7xl text-5xl text-white font-bold shadow-smoke-yellow drop-shadow-md">
              Doctors
						</div>
					</div>
					<p className="text-white font-light md:text-2xl text-sm sm:text-[1.5rem]">
            <div>
              Consult with the best Ayurveda doctors in India
            </div>
            <div>
              from the comfort of your home
            </div>
					</p>
					<div>
						<Link to="/signup" className="">
							<GoldOutlineButton text="Learn More" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
