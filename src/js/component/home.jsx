import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todolist, setTodolist] = useState("");

	const list = (e) => {
		e.preventDefault();
		//alert(`hay que hacer: ${todolist}`);
	};

	return (
		<div className="container">
			<form onSubmit={list}>
				<div className="mb-3">
					<input onChange={(e) => setTodolist(e.target.value)} />
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
			<h4>Cosas que hacer</h4>
			<ul>
				<li>{todolist}</li>
			</ul>
		</div>
	);
};

export default Home;

//https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
//https://www.google.com/search?q=TodoMVC+App+with+React+hooks&rlz=1C1GCEA_enIE897IE897&oq=TodoMVC+App+with+React+hooks&aqs=chrome..69i57j69i60.203j0j7&sourceid=chrome&ie=UTF-8