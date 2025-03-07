import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: 36,
  },
});