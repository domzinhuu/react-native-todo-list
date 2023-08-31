import { View } from "react-native";
import { styles } from "./styles";
import { TaskInput } from "../../components/TaskInput";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Text as RNText } from "react-native";
import { base } from "../../themes/base";
import { EmptyTaskList } from "../../components/EmptyTaskList";
import { TaskList } from "../../components/TaskList";

export function Home() {
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
              0
            </Text>
          </View>
        </View>

        <View style={styles.taskCount}>
          <Text weight="bold" variant="purple">
            Concluídas
          </Text>
          <View style={styles.taskCountNumber}>
            <Text weight="bold" variant="white" size="sm">
              0
            </Text>
          </View>
        </View>
      </View>

      {/* <EmptyTaskList /> */}
      <TaskList />
    </View>
  );
}
