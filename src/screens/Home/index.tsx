import { View } from "react-native";
import { styles } from "./styles";
import { TaskInput } from "../../components/TaskInput";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { TaskList } from "../../components/TaskList";
import { useContext } from "react";
import { taskContext } from "../../contexts/TaskContext";
import { EmptyTaskList } from "../../components/EmptyTaskList";

export function Home() {
  const { taskList, totalTasks, completeTasks } = useContext(taskContext);
  return (
    <View style={styles.container}>
      <Header />
      <TaskInput />

      <View style={styles.taskCountContainer}>
        <View style={styles.taskCount}>
          <Text weight="bold" variant="blue" variantWeight="300">
            Criadas
          </Text>
          <View style={styles.taskCountNumber}>
            <Text weight="bold" variant="white" size="sm">
              {totalTasks}
            </Text>
          </View>
        </View>

        <View style={styles.taskCount}>
          <Text weight="bold" variant="purple">
            Concluídas
          </Text>
          <View style={styles.taskCountNumber}>
            <Text weight="bold" variant="white" size="sm">
              {completeTasks}
            </Text>
          </View>
        </View>
      </View>

      {(!taskList.length && <EmptyTaskList />) || <TaskList />}
    </View>
  );
}
