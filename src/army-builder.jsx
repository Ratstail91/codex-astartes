import { useState, useEffect } from "react";

const ArmyBuilder = props => {
	const [army, setArmy] = useState({});

	//first load
	useEffect(() => {
		setArmy(JSON.parse(localStorage.getItem(props.name)) || {});
	}, []);

	//every run
	useEffect(() => {
		localStorage.setItem(props.name, JSON.stringify(army));
	}, [army]);

	//render
	return (<div>
		<input type='text' defaultValue={army.name} onChange={e => setArmy(a => { a.name = e.target.value; return JSON.parse(JSON.stringify(a)); } )} />
	</div>)
	;
};

export default ArmyBuilder;