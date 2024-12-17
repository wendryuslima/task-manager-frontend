import "../components/styles/TaskItem.scss";
import { MdDelete } from "react-icons/md";
import "./styles/Task.scss";

const TaskItem = ({ task }) => {
  return ( 
    <>
      <div className="task-item-container">
        <div className="task-description">
          <label
            className={
              task.isCompleted
                ? "checkbox-container-completed"
                : "checkbox-container"
            }
          >
            {task.description}
            <input type="checkbox" defaultChecked={task.isCompleted}></input>
            <span
              className={task.isCompleted ? "checkmark completed" : "checkmark"}
            ></span>
          </label>
        </div>

        <div className="delete">
          <MdDelete size={18} color="#f97474" />
        </div>
      </div>
    </>
  );
};

export default TaskItem;
