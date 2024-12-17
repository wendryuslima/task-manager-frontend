import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import "./styles/AddTask.scss";
import CustomButton from "./CustomButton";
import axios from "axios";

const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      const payload = {
        description: task,
        isCompleted: false,
      };

      const response = await axios.post("http://localhost:8000/tasks", payload);
      console.log("Resposta do servidor:", response.data);
      await fetchTasks();
      setTask("");
    } catch (error) {
      console.log("Erro ao tentar adicionar tarefa:");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar Tarefa" value={task} onChange={onChange} />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
