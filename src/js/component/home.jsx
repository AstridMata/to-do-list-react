import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todolist, setTodolist] = useState([]);
	const [newlist, setNewlist] = useState([]);

	// const list = (e) => {
	// 	e.preventDefault();
	// 	// 	//alert(`hay que hacer: ${todolist}`);
	// };
	const listatareas = [];

	// const newtodo = () => {
	// 	return listatareas.push({ todolist });
	// };
	console.log({ newlist });
	// const lis = listatareas.map((item, index) => {
	// 	return (
	// 		<li key={index} className="list-group-item">
	// 			{item}
	// 		</li>
	// 	);
	// });

	return (
		<div className="container">
			<ul className="list-group">
				<input onChange={(e) => setTodolist(e.target.value)}></input>
				<button onClick={(e) => setNewlist(e.target.value)}>
					Add Item
				</button>
			</ul>
		</div>
	);
};

export default Home;

//https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
//https://www.google.com/search?q=TodoMVC+App+with+React+hooks&rlz=1C1GCEA_enIE897IE897&oq=TodoMVC+App+with+React+hooks&aqs=chrome..69i57j69i60.203j0j7&sourceid=chrome&ie=UTF-8
// https://reactjs.org/docs/hooks-state.html
