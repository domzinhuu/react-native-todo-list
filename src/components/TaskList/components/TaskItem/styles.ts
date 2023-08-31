import { StyleSheet } from "react-native";
import { base } from "../../../../themes/base";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: base.colors["gray"]["500"],
    borderColor: base.colors["gray"]["400"],
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  taskMessage: {
    flexShrink: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  checkbox: {
    marginHorizontal: 8,
    width: 24,
    height: 24,
    borderRadius: 9999,
  },
  deleteBtn: {
    marginLeft: 8,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
