import axios from "axios";
import "./components/App.style.js";
import { useEffect } from "react";
import { useState } from "react";


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
      {tasks.map((task) => (
        <p>{task.description}</p>
      ))}
    </>
  );
};

export default App;
