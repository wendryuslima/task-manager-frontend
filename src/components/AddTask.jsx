import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import "./styles/AddTask.scss";
import CustomButton from "./CustomButton";
import axios from "axios";

const AddTask = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      console.log("Iniciando requisição para adicionar tarefa...");

      const payload = {
        description: task,
        isCompleted: false,
      };
      console.log("Payload enviado:", payload);

      const response = await axios.post("http://localhost:8000/tasks", payload);
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.log("Erro ao tentar adicionar tarefa:");
      if (error.response) {
        // O servidor respondeu com um código de status fora da faixa 2xx
        console.error("Resposta do servidor:", error.response.data);
        console.error("Código de status:", error.response.status);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.error(
          "Nenhuma resposta recebida. Detalhes da requisição:",
          error.request
        );
      } else {
        // Outro tipo de erro ocorreu
        console.error("Erro na configuração da requisição:", error.message);
      }
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
