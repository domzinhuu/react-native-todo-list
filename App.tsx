import { StatusBar, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { styles } from "./styles";
import { TaskProvider } from "./src/contexts/TaskContext";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={[styles.container, {}]}>
        <TaskProvider>
          <Home />
        </TaskProvider>
      </View>
    </>
  );
}
