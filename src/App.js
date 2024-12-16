import axios from "axios";
import "./App-style.js";
import { useEffect } from "react";
import { useState } from "react";
import { HeaderContainer } from "./App-style.js";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar",
      isCompleted: true,
    },

    {
      id: "2",
      description: "ler",
      isCompleted: true,
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
    <>
      <HeaderContainer>
        {tasks.map((task) => (
          <p>{task.description}</p>
        ))}
      </HeaderContainer>
    </>
  );
};

export default App;
