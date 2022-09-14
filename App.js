import { StyleSheet, Text, View } from "react-native";
import Navigatinss from "./src/Screens/Navigatinss";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigatinss />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
