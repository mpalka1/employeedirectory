import React from "react";

function ColumnWrapper(props) {
	return <div className="columns is-multiline">{props.children}</div>;
}

export default ColumnWrapper;