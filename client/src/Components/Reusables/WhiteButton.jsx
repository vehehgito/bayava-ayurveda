import React from "react";

function WhiteButton(props) {
    
    const onclick = props.onclick
    const text = props.text


	return (
		<div>
			<button onClick={onclick} className="bg-white hover:opacity-70 text-ayurveda-red px-7 py-1 rounded-2xl font-open-sans font-medium md:text-xl text-sm">{text}</button>
		</div>
	);
}

export default WhiteButton;
