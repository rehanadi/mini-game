import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  );
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    padding: 16,
    borderRadius: 8,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});