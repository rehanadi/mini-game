import { Text, View, StyleSheet, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth < 380 ? 12 : 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});