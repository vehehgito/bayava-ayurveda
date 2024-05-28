import React from "react";

const ValueContent = [
	{
		title: "Gaumata is a Sacred Animal",
		content:
			"Gaumata is a sacred animal in Hinduism. It is considered as a mother in Hindu culture and is worshipped as a deity. Gaumata is a symbol of wealth, prosperity, and abundance.",
		image: "https://images.unsplash.com/photo-1706804880795-320f1038341f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2F1bWF0YXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		title: "Gaumata is a Sacred Animal",
		content:
			"Gaumata is a sacred animal in Hinduism. It is considered as a mother in Hindu culture and is worshipped as a deity. Gaumata is a symbol of wealth, prosperity, and abundance.",
		image: "https://images.unsplash.com/photo-1599307848808-fb36c798ee87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwY293fGVufDB8fDB8fHww",
	},
	{
		title: "Gaumata is a Sacred Animal",
		content:
			"Gaumata is a sacred animal in Hinduism. It is considered as a mother in Hindu culture and is worshipped as a deity. Gaumata is a symbol of wealth, prosperity, and abundance.",
		image: "https://images.unsplash.com/photo-1595365691689-6b7b4e1970cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwY293fGVufDB8fDB8fHww",
	},
];

const GaumataValue = () => {
	return (
		<div className="min-h-screen bg-ayurveda-yellow flex flex-col items-center justify-between py-40">
			<div className="flex flex-col items-center justify-center gap-5">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase font-crimson text-center text-ayurveda-brown">
					Gaumata Value in Our Life
				</h1>
				<p className="prose prose-xl text-center">
					Gaumata is a sacred animal in Hinduism. It is considered as
					a mother in Hindu culture and is worshipped as a deity.
					Gaumata is a symbol of wealth, prosperity, and abundance.
				</p>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
				{ValueContent.map((content, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-8 p-16"
						>
							<div>
								<img
									className="aspect-square object-cover w-96 h-96 rounded-xl"
									src={content.image}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2 className="text-2xl text-ayurveda-red font-bold">
									{content.title}
								</h2>
								<p className="prose prose-sm">
									{content.content}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GaumataValue;
