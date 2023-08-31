import { StyleSheet } from "react-native";
import { base } from "../../themes/base";

export const styles = StyleSheet.create({
  container: {},
  taskCountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
  },
  taskCount: {
    flexDirection: "row",
    gap: 8,
  },
  taskCountNumber: {
    backgroundColor: base.colors["gray"]["400"],
    borderRadius: 99999,
    color: base.colors["white"]["500"],
    fontWeight: "bold",
    fontSize: base.sizes["md"],
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
