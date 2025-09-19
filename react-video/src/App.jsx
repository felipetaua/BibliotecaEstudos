import { useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  // states (estado)
  const [tasks, setTask] = useState([
    {
    id: 1,
    title: "Estudar Matemática",
    description: "Estudar matemática básica para se tornar um desenvolvedor full-stack",
    isCompleted: false,
  
    },
    {
      id: 2,
      title: "Estudar Programação",
      description: "Aprimorar conceitos de programação para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Leitura Diaria",
      description: "Leitura de livros de programação para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    }
    ])
  
  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })
    // NÃO PRECISA ATUALIZAR ESSA TAREFA
    setTask(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id  !== taskId);
    setTask(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de tarefas
          </h1>
          <AddTask />
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;