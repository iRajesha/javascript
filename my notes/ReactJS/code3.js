const TodosApp = ({ initialData }) => {
    const [todos, setTodos] = useState(initialData.todos);
    const [filterLabel, setFilterLabel] = useState('All');
  
    const addNewTodo = useCallback(newTodoBody =>
      setTodos(prevTodos => ({
        ...prevTodos,
        [uniqueId()]: {
          body: newTodoBody,
          done: false,
        },
      })), []);
  
    const toggleTodoDone = useCallback((todoId, newDoneValue) =>
      setTodos(prevTodos => ({
        ...prevTodos,
        [todoId]: {
          ...prevTodos[todoId],
          done: newDoneValue,
        },
      })), []);
  
    const deleteTodo = useCallback(todoId =>
      setTodos(prevTodos => {
        const { [todoId]: _, ...todos } = prevTodos;
        return todos;
      }), []);
  
    const deleteAllDoneTodos = useCallback(() =>
      setTodos(prevTodos =>
        Object.entries(prevTodos).reduce((acc, [todoId, todo]) => {
          if (!todo.done) {
            acc[todoId] = todo;
          }
          return acc;
        }, {})
      ), []);
  
    const shouldShowTodo = todo =>
      filterLabel === 'All' ||
      (filterLabel === 'Active' && !todo.done) ||
      (filterLabel === 'Completed' && todo.done);
  
    return (
      <>
        <header>TODO List</header>
        <ul>
          {Object.entries(todos).map(
            ([todoId, todo]) =>
              shouldShowTodo(todo) && (
                <TodoItem
                  key={todoId}
                  id={todoId}
                  todo={todo}
                  toggleTodoDone={toggleTodoDone}
                  deleteTodo={deleteTodo}
                />
              )
          )}
        </ul>
        <AddTodoForm onSubmit={addNewTodo} />
        <div className="actions">
          Show:{' '}
          <FilterButton
            label="All"
            onClick={setFilterLabel}
            active={filterLabel === 'All'}
          />
          <FilterButton
            label="Active"
            onClick={setFilterLabel}
            active={filterLabel === 'Active'}
          />
          <FilterButton
            label="Completed"
            onClick={setFilterLabel}
            active={filterLabel === 'Completed'}
          />
        </div>
        <div className="actions">
          <button onClick={deleteAllDoneTodos}>Delete All Completed</button>
        </div>
        <footer>
          <TodosLeft todos={todos} />
        </footer>
      </>
    );
  };
  
  const TodoItem = React.memo(function TodoItem({
    id,
    todo,
    toggleTodoDone,
    deleteTodo,
  }) {
    display.count('TodoItem renders');
    const handleCheckboxChange = event => {
      const newDone = event.target.checked;
      toggleTodoDone(id, newDone);
    };
  
    const handleXClick = () => {
      deleteTodo(id);
    };
  
    const todoStyle = { textDecoration: todo.done ? 'line-through' : 'none' };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleCheckboxChange}
        />
        <span style={todoStyle}>{todo.body}</span>
        <span role="link" onClick={handleXClick}>
          X
        </span>
      </li>
    );
  });
  
  const AddTodoForm = React.memo(function AddTodoForm({ onSubmit }) {
    display.count('AddTodoForm renders');
  
    const handleSubmit = event => {
      event.preventDefault();
      onSubmit(event.target.todoBody.value);
      event.target.todoBody.value = '';
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoBody" placeholder="What TODO?" />
        <button type="submit">Add TODO</button>
      </form>
    );
  });
  
  const FilterButton = React.memo(function FilterButton({
    label,
    active,
    onClick,
  }) {
    display.count('FilterButton renders');
    const handleClick = () => onClick(label);
    const buttonStyle = {
      fontWeight: active ? 'bold' : 'normal',
    };
    return (
      <button onClick={handleClick} style={buttonStyle}>
        {label}
      </button>
    );
  });
  
  const TodosLeft = React.memo(function TodosLeft({ todos }) {
    display.count('TodosLeft renders');
    const activeTodosCount = 
      Object.values(todos).filter(todo => !todo.done).length;
  
    useEffect(() => {
      document.title = `Active TODOs: ${activeTodosCount}`;
    }, [activeTodosCount]);
  
    return <div>TODOs left: {activeTodosCount}</div>;
  });
  
  const initialData = {
    todos: {
      A: {
        body: 'Learn React Fundamentals',
        done: true,
      },
      B: {
        body: 'Build a TODOs App',
        done: false,
      },
      C: {
        body: 'Build a Game',
        done: false,
      },
    },
  };
  
  ReactDOM.render(
    <TodosApp initialData={initialData} />,
    document.getElementById('mountNode')
  );
  
  const uniqueId = () => Date.now().toString(36) + Math.random().toString(36);