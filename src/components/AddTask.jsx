import { useState } from "react";
import CustomInput from "./CustomInput";
import "./styles/AddTask.scss";

const AddTask = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar Tarefa" value={task} onChange={onChange} />
    </div>
  );
};

export default AddTask;
