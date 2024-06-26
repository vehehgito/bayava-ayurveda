import { useState } from "react";
import { Link } from "react-router-dom";
import SmallYellowOutlineButton from "../Reusables/SmallYellowOutlineButton";
import RedButton from "../Reusables/RedButton";

function Navbar() {
	const [menu, setMenu] = useState(false);

	const handleMenu = () => {
		setMenu(!menu);
	};

	return (
		<nav className="fixed top-0 left-0 z-50 w-full h-20 flex items-center justify-between px-5 bg-ayurveda-green text-white drop-shadow-lg min-[1200px]:px-40">
			<div className="">
				<h1 className="lg:text-6xl md:text-3xl sm:text-2xl text-xl font-bold text-white">
					<Link className="" to="/">
						<div className="font-light leading-9 tracking-widest">
							DAYA
						</div>
					</Link>
				</h1>
			</div>
			<div className="min-[788px]:flex hidden">
				<ul className="flex items-center justify-between gap-5 font-open-sans text-base font-medium">
					<li>
						<Link>Appointments</Link>
					</li>
					<li>
						<Link>Doctors</Link>
					</li>
					<li>
						<Link>Shop</Link>
					</li>
					<li>
						<Link>Cow Mata Treatment</Link>
					</li>
					<li>
						<Link>About Us</Link>
					</li>
				</ul>
			</div>
			<div className="min-[788px]:flex hidden items-center justify-between gap-5">
				<Link to="/signup">
					<SmallYellowOutlineButton text="Get Started" />
				</Link>
				<select className="bg-ayurveda-gold border border-white min-[920px]:px-5 px-2 py-2 rounded-md outline-none focus:ring-0 font-open-sans text-white">
					<option>English</option>
					<option>Hindi</option>
				</select>
			</div>

			<div className="min-[788px]:hidden flex">
				<button onClick={handleMenu}>
					{menu ? (
						<svg
							width="20"
							height="20"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					) : (
						<svg
							width="20"
							height="20"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					)}
				</button>
			</div>

			{menu && (
				<div className="absolute top-20 left-0 px-5 w-full h-screen bg-white z-50 flex flex-col gap-16 py-24">
					<ul className="flex flex-col justify-center gap-3 font-open-sans text-base text-ayurveda-red font-medium">
						<li>
							<Link>Appointments</Link>
						</li>
						<li>
							<Link>Doctors</Link>
						</li>
						<li>
							<Link>Shop</Link>
						</li>
						<li>
							<Link>About Us</Link>
						</li>
						<li>
							<Link onClick={handleMenu} to="/login">
								Login
							</Link>
						</li>
					</ul>
					<div className="md:hidden flex items-center justify-between gap-5">
						<Link to="/signup">
							<RedButton text="Get Started" />
						</Link>
						<select className="bg-ayurveda-gold px-5 py-2 rounded-md focus:ring-0 font-open-sans text-white">
							<option>English</option>
							<option>Hindi</option>
						</select>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
