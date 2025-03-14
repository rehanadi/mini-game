import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>
        #{roundNumber}
      </Text>
      <Text style={styles.itemText}>
        Opponent's Guess: {guess}
      </Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 40,
    marginVertical: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});