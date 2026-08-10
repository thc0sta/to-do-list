import { useEffect, useState } from "react";

const TodoForm = ({
  addTodo,
  updateTodo,
  todoToEdit,
  setTodoToEdit
}) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (todoToEdit) {
      setValue(todoToEdit.text);
      setCategory(todoToEdit.category);
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || !category) return;

    if (todoToEdit) {

      updateTodo({
        ...todoToEdit,
        text: value,
        category: category
      });

      setTodoToEdit(null);

    } else {

      addTodo(value, category);

    }

    setValue("");
    setCategory("");
  };

  return (
    <div>
      <h2>
        {todoToEdit ? "Editar Tarefa" : "Criar Tarefa"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button type="submit">
          {todoToEdit ? "Salvar Alterações" : "Criar Tarefa"}
        </button>

      </form>
    </div>
  );
};

export default TodoForm;

