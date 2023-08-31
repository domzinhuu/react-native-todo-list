import { View } from "react-native";
import { Text } from "../Text";
import { TaskItem } from "./components/TaskItem";
import { styles } from "./styles";

export function TaskList() {
  return (
    <View style={styles.container}>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </View>
  );
}
