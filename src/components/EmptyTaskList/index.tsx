import { View } from "react-native";
import { styles } from "./styles";
import { Book } from "../icons/BookIcon";
import { Text } from "../Text";

export function EmptyTaskList() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Book />
        <View style={styles.textContent}>
          <Text weight="bold" variant="gray" variantWeight="300">
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text variant="gray" variantWeight="300">
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </View>
  );
}
