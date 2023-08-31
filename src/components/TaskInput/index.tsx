import { Alert, TextInput, TouchableHighlight, View } from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { base } from "../../themes/base";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { taskContext } from "../../contexts/TaskContext";

export function TaskInput() {
  const { onAdd } = useContext(taskContext);
  const [message, setMessage] = useState("");

  const handleAddNewTask = () => {
    if (!message) {
      Alert.alert("Add Task","Informe o texto para salvar a task.");
      return;
    }

    onAdd(message);
    setMessage("");
  };

  return (
    <View style={styles.taskInput}>
      <TextInput
        style={styles.inputText}
        value={message}
        onChangeText={setMessage}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={base.colors["gray"]["300"]}
      />
      <TouchableHighlight style={styles.button} onPress={handleAddNewTask}>
        <PlusCircle size={20} color={base.colors["gray"]["100"]} />
      </TouchableHighlight>
    </View>
  );
}
