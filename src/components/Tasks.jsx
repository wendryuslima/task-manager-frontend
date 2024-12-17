import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import TaskItem from "./TaskItem";

import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar clean code",
      isCompleted: true,
    },
    {
      id: "2",
      description: "Ler",
      isCompleted: false,
    },
  ]);
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === true);
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />

        <div className="tasks-list">
          {tasks.map((lastTask) => (
            <TaskItem
              key={lastTask.id}
              task={lastTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask) => (
            <TaskItem
              key={completedTask._id}
              task={completedTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
