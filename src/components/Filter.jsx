    const Filter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar</h2>
        <div className='filter-options'>
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Todos</option>
                    <option value="completed">Completos</option>
                    <option value="sincomplete">Incompletos</option>
                </select>
            </div>
            
            <div>
                <p>Ordem de Criação:</p>
                <button onClick={() => setSort("Asc")}>Mais antigas</button>
                <button onClick={() => setSort("Desc")}>Mais recentes</button>
            </div>
        </div>      
    </div>
  );
};

export default Filter;