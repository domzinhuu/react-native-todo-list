import { TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { Text } from "../../../Text";
import { Trash } from "phosphor-react-native";
import { base } from "../../../../themes/base";
import { useState } from "react";

interface TaskItemProps {
  checked: boolean;
  text: string;
  onChangeValue: (value: boolean) => void;
  onDeleteTask: (message: string) => void;
}

export function TaskItem({
  checked,
  text,
  onChangeValue,
  onDeleteTask,
}: TaskItemProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        value={checked}
        onValueChange={onChangeValue}
        style={styles.checkbox}
        color={
          checked ? base.colors["purple"]["300"] : base.colors["blue"]["300"]
        }
      />
      <View style={styles.taskMessage}>
        <Text size="md">{text}</Text>
      </View>
      <TouchableHighlight
        style={styles.deleteBtn}
        onPress={() => onDeleteTask(text)}
      >
        <Trash size={20} color={base.colors["gray"]["300"]} />
      </TouchableHighlight>
    </View>
  );
}
