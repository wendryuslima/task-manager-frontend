import {
  CompletedTasks,
  LastTasks,
  TaskContainer,
  TaskList,
  TitleLastTasks,
} from "./styles/Task.style";
import axios from "axios";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <TaskContainer>
      <TitleLastTasks>Minhas tarefas</TitleLastTasks>

      <LastTasks>
        <TitleLastTasks>Ultimas tarefas</TitleLastTasks>
        <TaskList>
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </TaskList>
      </LastTasks>

      <CompletedTasks>
        <TitleLastTasks>Tarefas tarefas</TitleLastTasks>
        <TaskList>
          {tasks
            .filter((task) => task.description)
            .map((completedTask) => (
              <p>{completedTask.description}</p>
            ))}
        </TaskList>
      </CompletedTasks>
    </TaskContainer>
  );
};

export default Tasks;
