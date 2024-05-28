import React from "react";
import WhiteButton from "../Reusables/WhiteButton";

const GaumataTreatment = () => {
	return (
		<div className="min-h-screen bg-ayurveda-brown/90 flex flex-col items-center justify-center gap-24 p-16">
			<div>
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase font-crimson text-center text-ayurveda-yellow">
					Gaumata Treatment
				</h1>
			</div>
			<div className="flex md:flex-row flex-col justify-between items-center gap-12">
				<div>
					<img
						className="aspect-video object-cover rounded-xl"
						src="https://images.unsplash.com/photo-1620727483442-20b6450ca8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY293fGVufDB8fDB8fHww"
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-24">
					<p className="prose md:prose-2xl prose-sm text-ayurveda-yellow">
						Gaumata is a sacred animal in Hinduism. It is considered
						as a mother in Hindu culture and is worshipped as a
						deity. Gaumata is a symbol of wealth, prosperity, and
						abundance.
					</p>
					<div className="flex w-full justify-end">
                        <WhiteButton text="Learn More" />
                    </div>
				</div>
			</div>
		</div>
	);
};

export default GaumataTreatment;
