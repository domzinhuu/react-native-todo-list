import { TextInput, TouchableHighlight, View } from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { base } from "../../themes/base";
import { styles } from "./styles";

export function TaskInput() {
  return (
    <View style={styles.taskInput}>
      <TextInput
        style={styles.inputText}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={base.colors["gray"]["300"]}
      />
      <TouchableHighlight style={styles.button}>
        <PlusCircle size={20} color={base.colors["gray"]["100"]} />
      </TouchableHighlight>
    </View>
  );
}
