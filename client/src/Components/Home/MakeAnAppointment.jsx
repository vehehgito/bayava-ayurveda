import React from "react";
import RedButton from "../Reusables/RedButton";

const featuresContent = [
	{
		title: "Feature 1",
	},
	{
		title: "Feature 2",
	},
	{
		title: "Feature 3",
	},
];

const MakeAnAppointment = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-between py-40">
			<div>
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">
					Make an Appointment
				</h1>
			</div>
			<div className="flex items-center md:flex-row flex-col justify-between">
				<div className="w-full p-12 flex flex-col gap-16">
					<p className="prose lg:prose-2xl md:prose-xl sm:prose-lg prose-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed in urna
					</p>
					<div className="flex flex-wrap gap-16">
						{featuresContent.map((feature, index) => {
							return (
								<div
									key={index}
									className="flex flex-col items-center justify-between bg-ayurveda-yellow rounded-2xl w-full gap-1"
								>
									<div className="flex items-center justify-start w-full pl-10 pt-10">
										<h2 className="text-4xl font-bold w-full">
											{feature.title}
										</h2>
									</div>
									<div className="w-full pr-10 pb-10">
										<div className="grid w-full justify-end">
											<svg
												width="45"
												height="45"
												viewBox="0 0 15 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
													fill="currentColor"
													fillRule="evenodd"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-full">
					<form action="" className="flex flex-col gap-5 p-10 w-full">
						<input
							type="text"
							placeholder="Name"
							className="p-3 rounded-md border border-black"
						/>
						<input
							type="email"
							placeholder="Email"
							className="p-3 rounded-md border border-black"
						/>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Message"
							className="p-3 rounded-md border border-black"
						></textarea>
						<div className="w-full flex justify-end">
                            <RedButton text="Submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MakeAnAppointment;
