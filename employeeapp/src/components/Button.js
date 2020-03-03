  
import React from "react";
import "../styles/style.css";


function Button(props) {
	return (
		<span className="button" {...props}>
			{props.children}
		</span>
	);
}

export default Button;