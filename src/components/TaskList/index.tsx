import { View } from "react-native";
import { Text } from "../Text";
import { TaskItem } from "./components/TaskItem";
import { styles } from "./styles";
import { useContext } from "react";
import { Task, taskContext } from "../../contexts/TaskContext";

export function TaskList() {
  const { taskList, onToggle, onDelete } = useContext(taskContext);

  const handleToggle = (checked: boolean, task: Task) => {
    onToggle(checked, task);
  };

  const handleDeleteTask = (message: string) => {
    onDelete(message);
  };

  return (
    <View style={styles.container}>
      {taskList.map((item) => (
        <TaskItem
          key={item.message}
          checked={!!item.finished}
          text={item.message}
          onDeleteTask={handleDeleteTask}
          onChangeValue={(value) => handleToggle(value, item)}
        />
      ))}
    </View>
  );
}
