import Tasks from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  // states (estado)
  return (
    <div>
      <h1 className="logo">Gerenciador de tarefas</h1>
        <AddTask/>
        <Tasks/>
    </div>
  );
}

export default App;