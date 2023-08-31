import { StyleSheet } from "react-native";
import { base } from "../../themes/base";

export const styles = StyleSheet.create({
  taskInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 4,
    marginTop: -56,
  },
  inputText: {
    flex: 1,
    height: 54,
    backgroundColor: base.colors["gray"]["500"],
    borderRadius: 6,
    borderColor: base.colors["gray"]["700"],
    borderWidth: 1,
    color: base.colors["white"]["500"],
    padding: 16,
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 6,
    backgroundColor: base.colors["blue"]["500"],
    justifyContent: "center",
    alignItems: "center",
  },
});
