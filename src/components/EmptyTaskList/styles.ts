import { StyleSheet } from "react-native";
import { base } from "../../themes/base";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
  },
  content: {
    borderTopColor: base.colors["gray"]["300"],
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
    gap:16
  },
  textContent: {
    textAlign: "justify",
    justifyContent: "center",
    alignItems: "center",
  },
});
