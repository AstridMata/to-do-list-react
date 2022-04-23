import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [listTodos, setListTodos] = useState([]);
	const handleSumbit = (e) => {
		e.preventDefault();
		setTodo("");
		setListTodos([...listTodos, { id: listTodos.length, name: todo }]);
	};

	console.log(listTodos);
	console.log(todo);

	const deleteTodo = (id) => {
		setListTodos(listTodos.filter((item) => item.id !== id));
	};

	return (
		<div className="fondo">
			<div className="container todoframe">
				<div>
					<p className="title text-center">Todos</p>
				</div>
				<form onSubmit={handleSumbit} noValidate>
					<div className="mb-3">
						<label
							htmlFor="exampleInputEmail1"
							className="form-label"></label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={(e) => setTodo(e.target.value)}
							value={todo}></input>
					</div>
					<button
						type="submit"
						className="button btn btn-primary"></button>
				</form>
				<ul className="container listOfTodos">
					{listTodos.map((item) => (
						<li key={item.id}>
							{item.name}
							<i
								className="bi bi-trash"
								onClick={() => deleteTodo(item.id)}></i>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;

//https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
//https://www.google.com/search?q=TodoMVC+App+with+React+hooks&rlz=1C1GCEA_enIE897IE897&oq=TodoMVC+App+with+React+hooks&aqs=chrome..69i57j69i60.203j0j7&sourceid=chrome&ie=UTF-8
// https://reactjs.org/docs/hooks-state.html
