import { View } from "react-native";
import { Logo } from "../icons/Logo";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
