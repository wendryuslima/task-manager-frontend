import axios from "axios";
import { useState, useEffect, useMemo, useCallback } from "react";
import TaskItem from "./TaskItem";

import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/tasks`
      );
      console.log("Data recebida:", data); 
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  }, []);

  const lastTasks = useMemo(() => {
    if (Array.isArray(tasks)) {
      return tasks.filter((task) => task.isCompleted === false);
    }
    return [];
  }, [tasks]);

  const completedTasks = useMemo(() => {
    if (Array.isArray(tasks)) {
      return tasks.filter((task) => task.isCompleted === true);
    }
    return [];
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              key={lastTask._id}
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
