import "../components/styles/TaskItem.scss";
import { MdDelete } from "react-icons/md";
import "./styles/Task.scss";
import axios from "axios";

const TaskItem = ({ task, fetchTasks }) => {
  const handleDeleteCLick = async (e) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
      await fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompletionTask = async (e) => {
    try {
      await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
        isCompleted: e.target.checked,
      });
      await fetchTasks();
    } catch (error) {}
  };
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
            <input
              type="checkbox"
              defaultChecked={task.isCompleted}
              onChange={(e) => handleCompletionTask(e)}
            />
            <span
              className={task.isCompleted ? "checkmark completed" : "checkmark"}
            ></span>
          </label>
        </div>

        <div className="delete">
          <MdDelete onClick={handleDeleteCLick} size={18} color="#f97474" />
        </div>
      </div>
    </>
  );
};

export default TaskItem;
