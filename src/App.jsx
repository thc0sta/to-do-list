import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
      createdAt: 1,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
      createdAt: 2,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
      createdAt: 3,
    },
  ]);

  const [search, setSearch] = useState(""); // estado que armazena o texto digitado na busca
  const [filter, setFilter] = useState("all"); // estado que armazena o filtro selecionado
  const [sort, setSort] = useState("Asc"); // estado que controla a ordem das tarefas


  //responsável por adicionar uma nova tarefa
  const addTodo = (text, category) => {
    const newTodo = {
      id: Date.now(),
      text,
      category,
      isCompleted: false,
      createdAt: Date.now(),
    };

    setTodos([...todos, newTodo]); 
  }; 
  //acaba aqui


  //responsável por remover uma tarefa
  const removeTodo = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filterTodos);
  };
  // acaba aqui


  //responsável por completar ou desfazer uma tarefa
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );

    setTodos(newTodos);
  };
  //acaba aqui



  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      {/* faz a busca */}   
      <Search search={search} 
      setSearch={setSearch} 
      />

      {/* responsável pelo filtro */}
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

          <TodoForm addTodo={addTodo} />

      {/* lista de tarefas */}    
      <div className="todo-list">
        {todos
        //filtra pelo status da tarefa
          .filter((todo) =>
            filter === "all"
              ? true
              : filter === "completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )

          //depois filtra pelo texto pesquisado
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )

          //ordena as tarefas pela data de criação
          .sort((a, b) =>
            sort === "Asc"
              ? a.createdAt - b.createdAt
              : b.createdAt - a.createdAt
          )
          
          //percorre a lista e cria um componente Todo para cada tarefa
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
          {/* Formulário responsável por adicionar novas tarefas */}
  
    </div>
  );
}

export default App;