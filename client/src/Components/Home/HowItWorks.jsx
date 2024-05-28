import React from "react";
import Steps from "./Steps";
import YellowButton from "../Reusables/YellowButton";

function HowItWorks() {

    const stepsContent = [
        {
            id: 1,
            title: "What is Yoga? Why do we need it in modern times?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 2,
            title: "Our Divine Vision",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 3,
            title: "What is our Parampara? Why you should study at Brahmarishi Academy of Yoga and Ayurveda?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        }
    ]


	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 py-7 md:px-12 px-0">
			<div className="flex items-center justify-center w-full">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase font-crimson text-center">Our Philosophy</h1>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center w-full">
				<div className="flex flex-col justify-between items-center gap-10">
					<div className="flex flex-col items-center justify-center gap-5 py-4">
						{
                            stepsContent.map((item, index) => {
                                return (
                                    <Steps key={index} id={item.id} title={item.title} description={item.description} />
                                )
                            })
                        }
					</div>
					<div>
                        <YellowButton text="Learn More" />
                    </div>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1627728724901-e79f35800820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D"
						alt="How It Works"
						className="aspect-video object-cover rounded drop-shadow-md min-[933px]:flex hidden"
					/>
				</div>
			</div>
		</div>
	);
}

export default HowItWorks;
