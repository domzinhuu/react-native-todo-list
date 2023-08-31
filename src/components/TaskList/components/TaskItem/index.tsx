import { TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { Text } from "../../../Text";
import { Trash } from "phosphor-react-native";
import { base } from "../../../../themes/base";
import { useState } from "react";

export function TaskItem() {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        value={check}
        onValueChange={setCheck}
        style={styles.checkbox}
        color={
          check ? base.colors["purple"]["300"] : base.colors["blue"]["300"]
        }
      />
      <View style={styles.taskMessage}>
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur
        </Text>
      </View>
      <TouchableHighlight style={styles.deleteBtn}>
        <Trash size={20} color={base.colors["gray"]["300"]} />
      </TouchableHighlight>
    </View>
  );
}
